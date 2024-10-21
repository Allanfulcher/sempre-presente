import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Restaurants', 'Retail', 'Entertainment', 'Travel'];

const giftCards = [
  { id: 1, name: "Amazon", image: "https://source.unsplash.com/random/800x600?amazon", price: 25 },
  { id: 2, name: "Starbucks", image: "https://source.unsplash.com/random/800x600?coffee", price: 20 },
  { id: 3, name: "Netflix", image: "https://source.unsplash.com/random/800x600?movie", price: 30 },
  { id: 4, name: "Spotify", image: "https://source.unsplash.com/random/800x600?music", price: 15 },
  { id: 5, name: "Apple", image: "https://source.unsplash.com/random/800x600?apple", price: 50 },
  { id: 6, name: "Target", image: "https://source.unsplash.com/random/800x600?target", price: 40 },
];

const CatalogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gift Card Catalog</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search gift cards..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li key={category} className="mb-2">
                  <button className="text-left w-full py-2 px-4 rounded hover:bg-purple-100 transition-colors">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftCards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                  <p className="text-gray-600 mb-4">A partir de R$ {card.price}</p>
                  <Link
                    to={`/gift-card/${card.id}`}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors inline-block text-center"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CatalogPage;