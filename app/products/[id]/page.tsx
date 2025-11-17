import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Image side */}
        <div className="bg-rose-50/80 border border-rose-100 p-6 sm:p-8 flex items-center justify-center">
          <div className="relative w-full max-w-xl aspect-square bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* Details side */}
        <div className="space-y-6">
          {/* Title and rating */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-500 text-sm">
              <span>★★★★★</span>
              <span className="text-rose-800 text-sm">1804 reviews</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-rose-900 tracking-tight">
              {product.name}
            </h1>
            <div className="text-sm text-rose-500 uppercase tracking-[0.2em]">
              {product.category}
            </div>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <p className="text-sm text-rose-600/80">Price</p>
            <p className="text-2xl sm:text-3xl font-serif font-light text-rose-900">
              {product.price}
            </p>
            <p className="text-xs text-rose-500">
              Shipping calculated at checkout.
            </p>
          </div>

          {/* Short description */}
          <p className="text-sm text-rose-700/80 leading-relaxed">
            {product.description}
          </p>

          {/* Benefits list */}
          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-rose-700/80 uppercase mb-2">
              Key Benefits
            </h2>
            <ul className="space-y-1">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="text-sm text-rose-700/80 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity + CTA buttons (static UI) */}
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <p className="text-sm text-rose-700/80">Quantity</p>
              <div className="inline-flex items-center border border-rose-200 divide-x divide-rose-200">
                <button className="px-4 py-2 text-lg text-rose-700">-</button>
                <span className="px-6 py-2 text-sm text-rose-900">1</span>
                <button className="px-4 py-2 text-lg text-rose-700">+</button>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-3 transition-colors">
                Add to Cart
              </button>
              <button className="w-full rounded-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-sm font-medium py-3 transition-colors">
                Buy It Now
              </button>
            </div>
          </div>

          {/* Extra info rows (simple text) */}
          <div className="pt-4 space-y-3 border-t border-rose-100 mt-4 text-sm text-rose-700/80">
            <p>✔ Free shipping on qualifying orders</p>
            <p>✔ Gentle, skin-friendly ingredients</p>
            <p>✔ Easy returns within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}


