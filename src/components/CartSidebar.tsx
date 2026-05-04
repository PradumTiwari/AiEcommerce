import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { items, total, removeItem, isOpen, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h3 className="font-display text-2xl font-bold">Your Cart</h3>
          <button
            onClick={closeCart}
            className="text-2xl text-bark-800/40 hover:text-bark-900 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-bark-800/40">
              <span className="text-6xl">🛒</span>
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="divide-y divide-cream-200">
              {items.map(item => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-bark-900 truncate">
                      {item.name} {item.qty > 1 && <span className="text-bark-800/50">×{item.qty}</span>}
                    </p>
                    <p className="text-sm text-clay-500 font-semibold mt-0.5">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-bark-800/30 hover:text-red-400 transition-colors text-lg"
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-cream-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-bark-800/60">Total</span>
              <span className="font-display text-2xl font-bold">₹{total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-clay-500 hover:bg-clay-600 text-white py-3.5 rounded-full font-semibold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
