import React from 'react';
import { useCart } from '../components/cart/CartProvider';
import { MinusCircle, PlusCircle, Trash2, CreditCard, Wallet, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import BrandNavbar from '../components/BrandNavbar';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 7;
  const finalTotal = total + shipping;

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <TopNavbar />
      <BrandNavbar />
      
      <div className="container mx-auto px-4 py-12 mt-32">
        <h1 className="text-3xl font-serif text-[#1A1F2C] mb-8">Mon Panier</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-[#8E9196]" />
            <h2 className="text-xl text-[#1A1F2C] mb-4 font-serif">Votre panier est vide</h2>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#700100] text-white px-8 py-3 rounded-md hover:bg-[#591C1C] transition-colors duration-300"
            >
              Continuer mes achats
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-[#F1F0FB] rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply p-2"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-serif text-[#1A1F2C] mb-1">{item.name}</h3>
                      <p className="text-[#8E9196] text-sm mb-2">Réf: {item.id.toString().padStart(6, '0')}</p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="text-[#8E9196] hover:text-[#1A1F2C] transition-colors"
                        >
                          <MinusCircle size={20} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#8E9196] hover:text-[#1A1F2C] transition-colors"
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium text-[#1A1F2C] mb-2">
                        € {(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#8E9196] hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
                <h2 className="text-xl font-serif text-[#1A1F2C] mb-6">Résumé de la commande</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#8E9196]">
                    <span>Sous-total</span>
                    <span>€ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#8E9196]">
                    <span>Livraison</span>
                    <span>{shipping === 0 ? 'Gratuite' : `€ ${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-lg font-medium text-[#1A1F2C]">
                      <span>Total</span>
                      <span>€ {finalTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-[#8E9196] mt-1">
                      TVA incluse
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => console.log('Proceeding with Konnekt payment')}
                    className="w-full bg-[#700100] text-white px-4 py-3 rounded-md hover:bg-[#591C1C] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <CreditCard size={20} />
                    Payer avec Konnekt
                  </button>
                  <button
                    onClick={() => console.log('Proceeding with cash payment')}
                    className="w-full border border-[#700100] text-[#700100] px-4 py-3 rounded-md hover:bg-[#F1F0FB] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Wallet size={20} />
                    Payer en espèces
                  </button>
                </div>

                <div className="mt-6 space-y-2 text-sm text-[#8E9196]">
                  <p className="flex items-center gap-2">
                    • Livraison gratuite à partir de 500€
                  </p>
                  <p className="flex items-center gap-2">
                    • Retours gratuits sous 14 jours
                  </p>
                  <p className="flex items-center gap-2">
                    • Service client disponible 24/7
                  </p>
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