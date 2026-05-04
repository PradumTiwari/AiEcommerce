export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center pt-16 px-6 md:px-16 lg:px-24 gap-12 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-clay-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cream-200/80 rounded-full blur-2xl" />
      </div>

      {/* Left: Text */}
      <div className="flex-1 z-10 text-center md:text-left mt-10 md:mt-0">
        <span className="inline-block bg-cream-200 text-clay-500 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-up animation-fill-both">
          New Collection 2025
        </span>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 animate-fade-up delay-100 animation-fill-both">
          Style That<br />
          <em className="text-clay-500 not-italic">Speaks</em> For You
        </h1>

        <p className="text-bark-800/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-10 animate-fade-up delay-200 animation-fill-both">
          Curated pieces for the modern soul — minimal by design, bold in statement.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-14 animate-fade-up delay-300 animation-fill-both">
          <a
            href="#products"
            className="bg-clay-500 hover:bg-clay-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-clay-400/30"
          >
            Shop Now
          </a>
          <a
            href="#features"
            className="border-2 border-cream-200 hover:border-clay-400 text-bark-900 hover:text-clay-500 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore More
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 justify-center md:justify-start animate-fade-up delay-400 animation-fill-both">
          {[
            { value: '12K+', label: 'Happy Customers' },
            { value: '500+', label: 'Products' },
            { value: '4.9★', label: 'Avg Rating' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-bark-900">{stat.value}</p>
              <p className="text-xs text-bark-800/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Visual card */}
      <div className="flex-1 flex justify-center items-center z-10 animate-fade-up delay-200 animation-fill-both">
        <div className="relative animate-float">
          {/* Card */}
          <div className="w-64 md:w-72 rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-80 bg-gradient-to-br from-clay-400 to-clay-600 flex items-center justify-center">
              <span className="text-8xl">👗</span>
            </div>
            <div className="bg-white px-5 py-4">
              <p className="font-semibold text-bark-900 text-sm">Linen Wrap Dress</p>
              <p className="text-xs text-bark-800/50 mb-3">Women's Collection</p>
              <div className="flex items-center justify-between">
                <p className="font-display text-xl font-bold text-clay-500">₹1,499</p>
                <button className="bg-clay-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-clay-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg text-sm font-semibold">
            🔥 Bestseller
          </div>

          {/* Rating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg text-xs font-semibold flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-bark-800/60">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
