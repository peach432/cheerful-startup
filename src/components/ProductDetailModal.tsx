import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    material: string;
    color: string;
    price: number;
    image: string;
  };
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState('Noir');

  const colors = ['Noir'];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-normal"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-['WomanFontBold'] text-[#591C1C]">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                REF: {product.id.toString().padStart(6, '0')}
              </p>
            </div>

            <div className="text-2xl font-bold">
              {product.price} €
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Matière</h3>
              <p className="text-gray-600">{product.material}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Couleur</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md text-sm transition-all
                      ${selectedColor === color 
                        ? 'border-[#591C1C] text-[#591C1C]' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Quantité</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementQuantity}
                  className="p-2 border rounded-md hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 border rounded-md hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button 
              className="w-full bg-[#700100] hover:bg-[#8B0000] text-white py-6 rounded-md flex items-center justify-center gap-2 transition-all"
              onClick={() => console.log('Added to cart:', { product, quantity, selectedColor })}
            >
              <ShoppingCart className="h-5 w-5" />
              Ajouter au panier
            </Button>

            <div className="text-sm text-gray-600 space-y-2">
              <p>• Livraison gratuite en Tunisie</p>
              <p>• Retours gratuits sous 14 jours</p>
              <p>• Service client disponible 24/7</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;