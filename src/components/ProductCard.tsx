import { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { show } = useToast();
  const [wished, setWished] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    show(`${product.emoji} ${product.name} added to cart!`);
  };

  const handleWish = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWished(v => !v);
    show(wished ? 'Removed from wishlist' : '❤️ Added to wishlist!');
  };

  const badgeColors: Record<string, string> = {
    New:     'bg-clay-500 text-white',
    Sale:    'bg-red-500 text-white',
    Popular: 'bg-bark-900 text-white',
  };

  return (
    <div className="group bg-white border border-cream-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Image area */}
      <div
        className="relative aspect-[3/4] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
          {product.emoji}
        </span>

        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${badgeColors[product.badge]}`}>
            {product.badge}
          </span>
        )}

        <button
          onClick={handleWish}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          aria-label="Wishlist"
        >
          {wished ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-semibold text-bark-900 text-sm truncate">{product.name}</p>
        <p className="text-xs text-bark-800/50 mb-3">{product.category}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-lg font-bold text-bark-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-bark-800/40 line-through ml-2">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="bg-clay-500 hover:bg-clay-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all hover:scale-105"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
