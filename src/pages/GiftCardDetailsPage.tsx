import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const giftCards = [
  { id: 1, name: "Amazon", image: "https://source.unsplash.com/random/800x600?amazon", description: "Compre em uma das maiores lojas online do mundo." },
  { id: 2, name: "Starbucks", image: "https://source.unsplash.com/random/800x600?coffee", description: "Presenteie com o melhor café e experiência." },
  { id: 3, name: "Netflix", image: "https://source.unsplash.com/random/800x600?movie", description: "Dê o presente do entretenimento ilimitado." },
];

const GiftCardDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const giftCard = giftCards.find(card => card.id === parseInt(id || ''));
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [customValue, setCustomValue] = useState<string>('');
  const { addToCart } = useCart();

  if (!giftCard) {
    return <div>Cupom não encontrado</div>;
  }

  const handleAddToCart = () => {
    if (selectedValue || customValue) {
      addToCart({
        id: giftCard.id,
        name: giftCard.name,
        price: selectedValue || parseFloat(customValue),
        quantity: 1,
      });
      alert('Cupom adicionado ao carrinho!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={giftCard.image} alt={giftCard.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{giftCard.name}</h1>
          <p className="text-gray-600 mb-6">{giftCard.description}</p>
          <h2 className="text-xl font-semibold mb-4">Selecione um valor:</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {[20, 50, 100].map((value) => (
              <button
                key={value}
                className={`px-6 py-2 rounded-full ${
                  selectedValue === value ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => {
                  setSelectedValue(value);
                  setCustomValue('');
                }}
              >
                R$ {value},00
              </button>
            ))}
            <div className="relative">
              <input
                type="number"
                placeholder="Outro valor"
                value={customValue}
                onChange={(e) => {
                  setCustomValue(e.target.value);
                  setSelectedValue(null);
                }}
                className="px-6 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <span className="absolute left-3 top-2">R$</span>
            </div>
          </div>
          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCardDetailsPage;