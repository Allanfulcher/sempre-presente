import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface Coupon {
  _id: string;
  code: string;
  value: number;
  isUsed: boolean;
}

const MerchantDashboard: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/merchant/coupons');
      setCoupons(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const markAsUsed = async (id: string) => {
    try {
      await axios.put(`http://localhost:5000/api/merchant/coupons/${id}/use`);
      fetchCoupons();
    } catch (err) {
      console.error(err);
    }
  };

  const updateValue = async (id: string, newValue: number) => {
    try {
      await axios.put(`http://localhost:5000/api/merchant/coupons/${id}`, { value: newValue });
      fetchCoupons();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Merchant Dashboard</h1>
      <p className="mb-4">Welcome, {user?.name}!</p>
      <h2 className="text-2xl font-semibold mb-4">Your Coupons</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon._id}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={coupon.value}
                    onChange={(e) => updateValue(coupon._id, Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded"
                  />
                </td>
                <td className="border px-4 py-2">
                  {coupon.isUsed ? 'Used' : 'Available'}
                </td>
                <td className="border px-4 py-2">
                  {!coupon.isUsed && (
                    <button
                      onClick={() => markAsUsed(coupon._id)}
                      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                    >
                      Mark as Used
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantDashboard;