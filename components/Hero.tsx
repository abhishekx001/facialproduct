export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-rose-900">
              Timeless Beauty
            </h1>
            <div className="w-24 h-px bg-rose-300 mx-auto"></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-rose-800/80 max-w-3xl mx-auto">
              Curated Skincare Essentials
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-rose-700/70 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our collection of premium serums and creams, 
            crafted with nature&apos;s finest ingredients for radiant, healthy skin.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="inline-block px-8 py-4 bg-rose-900 text-white font-light tracking-wider uppercase text-sm hover:bg-rose-800 transition-all duration-300 border border-rose-900 hover:border-rose-800"
            >
              Explore Collection
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6282358388&text=hi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-emerald-600 text-white font-light tracking-wider uppercase text-sm hover:bg-emerald-700 transition-all duration-300 border border-emerald-600 hover:border-emerald-700"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rose-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

