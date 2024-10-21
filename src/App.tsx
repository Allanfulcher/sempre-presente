import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import GiftCardDetailsPage from './pages/GiftCardDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import MerchantDashboard from './pages/MerchantDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/gift-card/:id" element={<GiftCardDetailsPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/merchant-dashboard" element={
                  <PrivateRoute role="merchant">
                    <MerchantDashboard />
                  </PrivateRoute>
                } />
                <Route path="/customer-dashboard" element={
                  <PrivateRoute role="customer">
                    <CustomerDashboard />
                  </PrivateRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;