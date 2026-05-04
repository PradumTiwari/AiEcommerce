import { useState } from 'react';
import { products } from '../data/products';
import { FilterType } from '../types';
import ProductCard from './ProductCard';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All',     value: 'all'     },
  { label: 'New',     value: 'new'     },
  { label: 'Sale',    value: 'sale'    },
  { label: 'Popular', value: 'popular' },
];

export default function Products() {
  const [active, setActive] = useState<FilterType>('all');

  const filtered = active === 'all' ? products : products.filter(p => p.filter === active);

  return (
    <section id="products" className="py-20 px-6 md:px-16 lg:px-24 bg-cream-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Products</h2>
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                active === f.value
                  ? 'bg-clay-500 border-clay-500 text-white'
                  : 'border-cream-200 text-bark-800/60 hover:border-clay-400 hover:text-clay-500'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
