import React from 'react';
import { useCart } from '../components/cart/CartProvider';
import { MinusCircle, PlusCircle, Trash2, CreditCard, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import BrandNavbar from '../components/BrandNavbar';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (paymentMethod: 'cash' | 'konnekt') => {
    console.log('Proceeding to checkout with:', paymentMethod);
    // Add checkout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <BrandNavbar />
      
      <div className="container mx-auto px-4 py-8 mt-32">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600 mb-4">Votre panier est vide</h2>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Continuer mes achats
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 border-b last:border-b-0">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">€ {item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="text-gray-500 hover:text-primary transition-colors"
                        >
                          <MinusCircle size={20} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-primary transition-colors"
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 transition-colors ml-4"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>€ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>€ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => handleCheckout('konnekt')}
                    className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <CreditCard size={20} />
                    Payer avec Konnekt
                  </button>
                  <button
                    onClick={() => handleCheckout('cash')}
                    className="w-full border border-primary text-primary px-4 py-3 rounded-md hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Wallet size={20} />
                    Payer en espèces
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;