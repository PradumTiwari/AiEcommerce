import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <div className="min-h-screen font-body bg-cream-50">
          <Navbar />
          <Hero />
          <Marquee />
          <Categories />
          <Products />
          <Features />
          <Newsletter />
          <Footer />
          <CartSidebar />
        </div>
      </ToastProvider>
    </CartProvider>
  );
}
