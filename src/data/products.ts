import { Product } from '../types';

export const products: Product[] = [
  { id: 1,  name: 'Linen Wrap Dress',      category: 'Women',       price: 1499, oldPrice: 2499, emoji: '👗', bgColor: '#f9e8d4', badge: 'New',     filter: 'new'     },
  { id: 2,  name: 'Canvas Sneakers',        category: 'Footwear',    price: 1999,                 emoji: '👟', bgColor: '#e8f0e8', badge: 'Popular', filter: 'popular' },
  { id: 3,  name: 'Slim Fit Chinos',        category: 'Men',         price: 1299, oldPrice: 1999, emoji: '👖', bgColor: '#e8edf5', badge: 'Sale',    filter: 'sale'    },
  { id: 4,  name: 'Gold Hoop Earrings',     category: 'Accessories', price: 799,                  emoji: '💛', bgColor: '#f5eee8',                   filter: 'popular' },
  { id: 5,  name: 'Floral Kurti',           category: 'Women',       price: 999,  oldPrice: 1499, emoji: '🌸', bgColor: '#fce8f0', badge: 'Sale',    filter: 'sale'    },
  { id: 6,  name: 'Leather Crossbody Bag',  category: 'Accessories', price: 2199,                 emoji: '👜', bgColor: '#f0e8e8', badge: 'New',     filter: 'new'     },
  { id: 7,  name: 'Oxford Button Shirt',    category: 'Men',         price: 1599, oldPrice: 2199, emoji: '👔', bgColor: '#e8f0f5', badge: 'Popular', filter: 'popular' },
  { id: 8,  name: 'Boho Sunglasses',        category: 'Accessories', price: 599,                  emoji: '🕶️', bgColor: '#eeeaf5', badge: 'New',     filter: 'new'     },
];

export const categories = [
  { label: 'Women',       count: 432, emoji: '👗', color: '#d4a96a' },
  { label: 'Men',         count: 381, emoji: '👔', color: '#7a9e87' },
  { label: 'Footwear',    count: 218, emoji: '👟', color: '#b5838d' },
  { label: 'Accessories', count: 157, emoji: '💍', color: '#6d9dc5' },
];
