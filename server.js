const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const axios = require('axios');

const app = express();
const PORT = 5001;
const MONGO_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'checkout_data';  //  MongoDB database name

let db;

app.use(cors());
app.use(express.json());

MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(DATABASE_NAME);
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

// Existing endpoints
app.post('/api/savePaymentResponse', async (req, res) => {
  try {
    const collection = db.collection("payment_responses");
    const responseToSave = req.body;
    await collection.insertOne(responseToSave);
    res.status(200).json({ message: "Payment response saved successfully!" });
  } catch (err) {
    console.error("Error in /api/savePaymentResponse:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/proxy', async (req, res) => {
  const { method, url, headers, data } = req.body;
  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to make request' });
  }
});

app.get('/api/paymentStats', async (req, res) => {
  try {
    const collection = db.collection("payment_responses");
    const acceptedPayments = await collection.countDocuments({ "Captured_Status": "Authorized" });
    const declinedPayments = await collection.countDocuments({ "Captured_Status": { $ne: "Authorized" } });
    res.json({ acceptedPayments, declinedPayments });
  } catch (err) {
    console.error("Error in /api/paymentStats:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/api/paymentDetails', async (req, res) => {
  try {
    const collection = db.collection("payment_responses");
    const paymentData = await collection.find({}).toArray();
    res.status(200).json(paymentData);
  } catch (err) {
    console.error("Error in /api/paymentDetails:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/trackAd', async (req, res) => {
  try {
    const collection = db.collection("ad_tracking_data");  
    const adDataToSave = req.body;
    await collection.insertOne(adDataToSave);
    res.status(200).json({ message: "Ad data recorded successfully!" });
  } catch (err) {
    console.error("Error in /api/trackAd:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/api/trackAd', async (req, res) => {
  try {
    const collection = db.collection("ad_tracking_data");  
    const adData = await collection.find({}).toArray();
    console.log("Fetched ad data:", adData);
    res.status(200).json(adData);
  } catch (err) {
    console.error("Error in /api/trackAd GET:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// New API endpoint for ad tracking pie chart data
app.get('/api/trackAdPieData', async (req, res) => {
  try {
    const collection = db.collection('ad_tracking_data');  
    const cursor = collection.aggregate([
      { $group: { _id: '$ad_id', totalImpressions: { $sum: '$impressions' } } }  // Using 'ad_id' and 'impressions' as per your existing schema
    ]);
    const result = await cursor.toArray();
    const responseData = result.map(item => ({ ad_id: item._id, totalImpressions: item.totalImpressions }));
    res.json(responseData);
  } catch (error) {
    console.error("Error fetching ad tracking pie data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
