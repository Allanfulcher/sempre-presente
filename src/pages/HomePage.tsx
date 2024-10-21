import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedGiftCards from '../components/FeaturedGiftCards';

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Give the Perfect Gift, Instantly</h1>
          <p className="text-xl mb-8">Send digital gift cards from hundreds of top brands with just a few clicks.</p>
          <Link to="/catalog" className="bg-white text-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors inline-flex items-center">
            Explore Gift Cards
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <FeaturedGiftCards />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Gift Card</h3>
              <p className="text-gray-600">Browse our wide selection of digital gift cards from top brands.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize Your Gift</h3>
              <p className="text-gray-600">Add a custom message and choose when to send your gift.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Send Instantly</h3>
              <p className="text-gray-600">Your gift card will be delivered immediately via email or text.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;