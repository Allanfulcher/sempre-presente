import React from 'react';
import { Gift, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { items } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gift size={32} />
          <span className="text-2xl font-bold">GiftHub</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/catalog" className="hover:text-purple-200 transition-colors">Catalog</Link></li>
            <li><Link to="/how-it-works" className="hover:text-purple-200 transition-colors">How It Works</Link></li>
            <li><Link to="/for-businesses" className="hover:text-purple-200 transition-colors">For Businesses</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="hover:text-purple-200 transition-colors relative">
            <ShoppingCart size={24} />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
            <div className="relative group">
              <button className="hover:text-purple-200 transition-colors flex items-center">
                <User size={24} />
                <span className="ml-2">{user?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link
                  to={user?.role === 'merchant' ? '/merchant-dashboard' : '/customer-dashboard'}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="hover:text-purple-200 transition-colors">
              <User size={24} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;