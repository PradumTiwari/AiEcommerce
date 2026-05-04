const features = [
  { icon: '🚚', title: 'Free Delivery',    desc: 'On all orders above ₹999. Lightning-fast dispatch within 24 hours.' },
  { icon: '🔄', title: 'Easy Returns',     desc: '30-day hassle-free returns. No questions asked, full refund guaranteed.' },
  { icon: '🔒', title: 'Secure Payments',  desc: '256-bit SSL encryption. Pay via UPI, cards, wallets — all safe.' },
  { icon: '🌿', title: 'Sustainable',      desc: 'Eco-friendly packaging and ethically sourced materials in every order.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 text-center">Why Choose NOVA?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <div
            key={f.title}
            className="bg-cream-50 border border-cream-200 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            <p className="text-4xl mb-4">{f.icon}</p>
            <h3 className="font-semibold text-bark-900 mb-2">{f.title}</h3>
            <p className="text-sm text-bark-800/55 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
