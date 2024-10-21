import React from 'react';
import { Star } from 'lucide-react';

interface GiftCard {
  id: number;
  name: string;
  image: string;
  rating: number;
}

const giftCards: GiftCard[] = [
  { id: 1, name: "Amazon", image: "https://source.unsplash.com/random/800x600?amazon", rating: 4.5 },
  { id: 2, name: "Starbucks", image: "https://source.unsplash.com/random/800x600?coffee", rating: 4.3 },
  { id: 3, name: "Netflix", image: "https://source.unsplash.com/random/800x600?movie", rating: 4.7 },
  { id: 4, name: "Spotify", image: "https://source.unsplash.com/random/800x600?music", rating: 4.4 },
];

const FeaturedGiftCards: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Gift Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {giftCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <span>{card.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGiftCards;