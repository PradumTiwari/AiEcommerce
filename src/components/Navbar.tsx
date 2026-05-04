import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Home',    href: '#home' },
    { label: 'Shop',    href: '#products' },
    { label: 'Why Us',  href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200' : 'bg-cream-50/80 backdrop-blur-sm'
        }`}
      >
        {/* Logo */}
        <span className="font-display text-2xl font-bold tracking-widest text-clay-500">
          NOVA
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-bark-800/60 hover:text-clay-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-clay-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="hidden md:flex p-2 rounded-full text-bark-800/50 hover:text-clay-500 hover:bg-cream-200 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          {/* Wishlist */}
          <button className="hidden md:flex p-2 rounded-full text-bark-800/50 hover:text-clay-500 hover:bg-cream-200 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            className="flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="min-w-[16px] h-5 bg-white text-clay-500 rounded-full text-xs font-bold flex items-center justify-center px-1">
              {count}
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-6 h-0.5 bg-bark-900 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bark-900 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bark-900 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 inset-x-0 z-40 bg-cream-50 border-b border-cream-200 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-bark-900 hover:text-clay-500 transition-colors block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
