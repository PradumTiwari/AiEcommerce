import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const subscribe = () => {
    if (!email.includes('@')) {
      setMsg('Please enter a valid email address.');
      return;
    }
    setMsg('🎉 Subscribed! Check your inbox for your 10% off code.');
    setEmail('');
  };

  return (
    <section className="bg-clay-500 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="text-white/75 text-sm mb-8">
          Subscribe for exclusive deals and new arrivals.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-3">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-full text-sm font-body outline-none border-none bg-white text-bark-900 placeholder-bark-800/40"
          />
          <button
            onClick={subscribe}
            className="bg-bark-900 hover:bg-bark-800 text-white px-6 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors"
          >
            Subscribe
          </button>
        </div>
        {msg && <p className="text-white/90 text-sm">{msg}</p>}
      </div>
    </section>
  );
}
