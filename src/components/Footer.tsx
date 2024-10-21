import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About GiftHub</h3>
            <p className="text-sm text-gray-400">GiftHub is your one-stop platform for sending and receiving digital gift cards. Spread joy with just a few clicks!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: support@gifthub.com</p>
            <p className="text-sm text-gray-400">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} GiftHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;