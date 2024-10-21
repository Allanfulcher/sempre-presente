import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'merchant' | 'customer'>('customer');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password, role);
      }
      navigate(role === 'merchant' ? '/merchant-dashboard' : '/customer-dashboard');
    } catch (err) {
      console.error(err);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? 'Log In' : 'Sign Up'}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Role</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="customer"
                      checked={role === 'customer'}
                      onChange={() => setRole('customer')}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">Customer</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="merchant"
                      checked={role === 'merchant'}
                      onChange={() => setRole('merchant')}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">Merchant</span>
                  </label>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="ml-1 text-purple-600 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;