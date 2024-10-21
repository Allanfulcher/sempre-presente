import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface Coupon {
  _id: string;
  code: string;
  value: number;
  merchant: {
    name: string;
  };
  isUsed: boolean;
}

const CustomerDashboard: React.FC = () => {
  const [purchases, setPurchases] = useState<Coupon[]>([]);
  const [gifts, setGifts] = useState<Coupon[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchPurchases();
    fetchGifts();
  }, []);

  const fetchPurchases = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/customer/purchases');
      setPurchases(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchGifts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/customer/gifts');
      setGifts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Dashboard</h1>
      <p className="mb-4">Welcome, {user?.name}!</p>
      
      <h2 className="text-2xl font-semibold mb-4">Your Purchases</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Merchant</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((coupon) => (
              <tr key={coupon._id}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">${coupon.value}</td>
                <td className="border px-4 py-2">{coupon.merchant.name}</td>
                <td className="border px-4 py-2">
                  {coupon.isUsed ? 'Used' : 'Available'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Gifts</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Merchant</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((coupon) => (
              <tr key={coupon._id}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">${coupon.value}</td>
                <td className="border px-4 py-2">{coupon.merchant.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDashboard;