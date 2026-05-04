export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  bgColor: string;
  badge?: 'New' | 'Sale' | 'Popular';
  filter: 'all' | 'new' | 'sale' | 'popular';
}

export interface CartItem extends Product {
  qty: number;
}

export type FilterType = 'all' | 'new' | 'sale' | 'popular';
