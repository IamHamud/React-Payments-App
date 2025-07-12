# Payments Dashboard Integrated with Checkout.com API's 🛒💳

## Brief Description 📝

This is a payments Dashboard serves as a robust backend solution that allows merchants to bypass CORS restrictions for testing payment APIs. It features real-time updates for payments and ad tracking stats, making it an invaluable tool for e-commerce platforms.

## Features ✨

- **Real-Time Payment Tracking**: Get real-time updates on payment acceptance and decline rates.
- **Ad Tracking**: Monitor the effectiveness of your ad campaigns in real-time.

## Technologies Used 💻

- Node.js
- React.js
- MongoDB
- Axios

## Recommended Package Versions 📦

For the best compatibility, it is recommended to use the following package versions:

- **Node.js**: v16.20.2
- **npm**: 9.8.1
- **MongoDB**: v5.0.17
- **React.js**: 18.2.0
- **Axios**: 1.4.0



## Setup and Installation 🛠️ ### Prerequisites 📋

- Node.js
- MongoDB
- npm

### Terminal Commands to Run the Project 🖥️

1. In the client folder, run:
    ```bash
    npm start
    ```
2. In another terminal window, navigate to the root directory and run:
    ```bash
    node server.js
    ```

### Initiating MongoDB 🍃

Make sure MongoDB is running. If not, initiate it by running:
```bash
mongod

Dependencies Installation 💾
### Run the following commands to install the required dependencies:
npm install axios
npm install cors
npm install express
npm install mongodb


Usage 🚀
API Endpoints 🌐
/webhook
/paymentData
/processedPaymentData
/api/paymentStats
/api/paymentDetails
/api/trackAd

### Payment Tracking through payment service provider 📊
Send a POST request to test data for declined and approval rates:

Method: POST
URL: https://api.sandbox.checkout.com/payments
Headers:
{
  "Content-Type": "application/json",
  "Authorization": "Bearer sk_sbox_lxxxxxxxxxxxxxxxxxxxxx#"
}

 Body: (JSON)
{
  "source": {
    "type": "card",
    "number": "4242424242424242",
    "expiry_month": "01",
    "expiry_year": "25",
    "cvv": "100"
  },
  "amount": 1000,
  "currency": "USD",
  "reference": "TEST_ACCEPTED_PAYMENT_12345",
  "processing_channel_id": "pc_xxxxxxxxxxxxxxxxx"
}

### For Testing Through LocalHost3000 🖥️ 📊
Construct the API tracker page request:

URL: http://localhost:5001/proxy
Method: POST
Headers:
{
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_SECRET_KEY_HERE"
}
Body:
{
  "method": "POST",
  "url": "https://api.sandbox.checkout.com/payments",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer sk_sbox_xxxxxxxxxxq#"
  },
  "data": {
    "source": {
      "type": "card",
      "number": "4242424242424242",
      "expiry_month": "01",
      "expiry_year": "25",
      "cvv": "100"
    },
    "amount": 1000,
    "currency": "USD",
    "reference": "TEST_ACCEPTED_PAYMENT_12345",
    "processing_channel_id": "pc_xxxxxxxxxxe"
  }
}
### Ad Tracking 📈
Send a POST request to track ad data:

Method: POST
URL: http://localhost:5001/api/trackAd
Headers:
{
  "Content-Type": "application/json"
}
Body:
{
  "ad_id": "AD_56789",
  "click_through_rate": 0.07,
  "impressions": 3000,
  "ad_spend": 150,
  "conversions": 20
}

Security 🔒
Secret API Key: BEARER YOUR_SECRET_KEY_HERE
Contact 📞
For queries or contributions, please contact us at IamHamuud@gmail.com.

GitHub: IamHamud
Acknowledgments 🙏
Special thanks to all contributors and the open-source libraries that made this project possible.

## webhook site: https://webhook.site/#!/
