const items = [
  'Free Shipping on ₹999+',
  '✦',
  'New Arrivals Every Week',
  '✦',
  'Easy 30-Day Returns',
  '✦',
  'Secure Payments',
  '✦',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-clay-500 text-white overflow-hidden py-3">
      <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium tracking-wide">{item}</span>
        ))}
      </div>
    </div>
  );
}
