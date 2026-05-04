import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const count = items.reduce((a, c) => a + c.qty, 0);
  const total = items.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
