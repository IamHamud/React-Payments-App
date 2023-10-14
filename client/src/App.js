import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PaymentPieChart from './components/PaymentPieChart';
import HamudPostman from './components/HamudPostman';
import PaymentTable from './components/PaymentTable'; 
import AdTrackingPage from './components/AdTrackingPage'; 

function App() {
  return (
    <Router>
      <div className="container my-5">
        <h2 className="mb-4">API Tester</h2>
        
        {/* Navigation */}
        <nav className="mb-5">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home (HamudPostman)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/charts">Charts (PaymentPieChart)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">Table (PaymentTable)</Link> {}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adtracking">Ad Tracking</Link> {}
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HamudPostman />} />
          <Route path="/charts" element={<PaymentPieChart />} />
          <Route path="/table" element={<PaymentTable />} /> {}
          <Route path="/adtracking" element={<AdTrackingPage />} /> {}
        </Routes>
      </div>
    </Router>
  );
}
export default App;