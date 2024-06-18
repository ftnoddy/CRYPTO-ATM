import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Kyc from "./pages/kyc";
import Buy from "./pages/buyBitcoin";
import OrderHistory from "./pages/orderHistory";
import AdminPage from "./pages/admin";
import GetKycUsers from "./pages/kycUsersPage";
import GetTotalUsers from "./pages/GetTotalUsers";
import GetTotalOrders from "./pages/getTotalOrders";
import CryptoChartPage from "./pages/cryptoChartsPage";
import PrivacyAndPolicies from "./pages/privacyPolices";
import KYCDetails from "./pages/kycDetails";
import RefundAndReturnPolicies from "./pages/refundPolices";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/get-kyc-users" element={<GetKycUsers />} />
          <Route path="/get-total-users" element={<GetTotalUsers />} />
          <Route path="/get-total-orders" element={<GetTotalOrders />} />          
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/crypto-charts" element={<CryptoChartPage />} />
          <Route path="/privacy-policies" element={<PrivacyAndPolicies />} />
          <Route path="/kyc-details" element={<KYCDetails />} />
          <Route path="/refund-return-policies" element={<RefundAndReturnPolicies />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


