const footerCols = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards'],
  },
  {
    title: 'Help',
    links: ['FAQs', 'Shipping Info', 'Return Policy', 'Track Order'],
  },
  {
    title: 'Contact',
    links: ['support@nova.in', '+91 98765 43210', 'Bengaluru, India'],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-bark-900 text-cream-200/70 py-16 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h2 className="font-display text-3xl font-bold text-clay-400 mb-3">NOVA</h2>
          <p className="text-sm leading-relaxed text-cream-200/50 mb-5">
            Style for the modern world. Curated, crafted, delivered to you.
          </p>
          <div className="flex gap-4 text-xl">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <button key={i} className="hover:opacity-60 transition-opacity">{icon}</button>
            ))}
          </div>
        </div>

        {/* Columns */}
        {footerCols.map(col => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-cream-50 mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream-200/50 hover:text-clay-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-bark-800 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-bark-800/60">
        <p>© 2025 NOVA. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
}
