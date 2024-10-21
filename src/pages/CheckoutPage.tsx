import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const { items } = useCart();
  const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', phone: '' });
  const [recipientInfo, setRecipientInfo] = useState({ name: '', email: '' });
  const [selectedCard, setSelectedCard] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do pedido
    console.log('Pedido enviado', { buyerInfo, recipientInfo, selectedCard, paymentInfo });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dados do Comprador e Recebedor</h2>
            <div className="mb-4">
              <label className="block mb-2">Nome do Comprador</label>
              <input
                type="text"
                value={buyerInfo.name}
                onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email do Comprador</label>
              <input
                type="email"
                value={buyerInfo.email}
                onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Telefone do Comprador</label>
              <input
                type="tel"
                value={buyerInfo.phone}
                onChange={(e) => setBuyerInfo({ ...buyerInfo, phone: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Nome do Recebedor</label>
              <input
                type="text"
                value={recipientInfo.name}
                onChange={(e) => setRecipientInfo({ ...recipientInfo, name: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email do Recebedor</label>
              <input
                type="email"
                value={recipientInfo.email}
                onChange={(e) => setRecipientInfo({ ...recipientInfo, email: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Escolha o Modelo do Cartão Presente</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Aniversário', 'Natal', 'Dia dos Namorados', 'Genérico'].map((card) => (
                <button
                  key={card}
                  className={`p-4 border rounded ${selectedCard === card ? 'bg-purple-100 border-purple-500' : ''}`}
                  onClick={() => setSelectedCard(card)}
                >
                  {card}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Pagamento</h2>
            <div className="mb-4">
              <label className="block mb-2">Número do Cartão</label>
              <input
                type="text"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Data de Expiração</label>
              <input
                type="text"
                value={paymentInfo.expiry}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">CVV</label>
              <input
                type="text"
                value={paymentInfo.cvv}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full ${
                step >= i ? 'bg-purple-600' : 'bg-gray-300'
              } flex items-center justify-center text-white`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-300 mt-4">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            >
              Voltar
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Próximo
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Finalizar Compra
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;