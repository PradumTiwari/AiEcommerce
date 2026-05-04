import { categories } from '../data/products';

export default function Categories() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories.map(cat => (
          <button
            key={cat.label}
            className="group relative bg-cream-50 border border-cream-200 rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
              style={{ backgroundColor: cat.color }}
            />
            <p className="text-4xl mb-3">{cat.emoji}</p>
            <p className="font-semibold text-bark-900">{cat.label}</p>
            <p className="text-xs text-bark-800/50 mt-1">{cat.count} Items</p>
          </button>
        ))}
      </div>
    </section>
  );
}
