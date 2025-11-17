export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-rose-100">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-light text-rose-900 tracking-wider">
            Timeless Beauty
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="text-sm font-light text-rose-700 hover:text-rose-900 transition-colors uppercase tracking-wide"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-light text-rose-700 hover:text-rose-900 transition-colors uppercase tracking-wide"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-light text-rose-700 hover:text-rose-900 transition-colors uppercase tracking-wide"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

