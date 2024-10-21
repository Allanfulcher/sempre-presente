import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { items, removeFromCart } = useCart();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>
      
      {items.length === 0 ? (
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantidade: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-semibold mr-4">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Impostos</span>
                <span>R$ {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="w-full bg-purple-600 text-white py-2 rounded-lg mt-6 hover:bg-purple-700 transition-colors inline-block text-center"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;