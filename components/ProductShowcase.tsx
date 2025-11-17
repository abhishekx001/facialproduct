"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Serum", "Cream"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-rose-900 tracking-tight">
            Our Collection
          </h2>
          <div className="w-24 h-px bg-rose-300 mx-auto"></div>
          <p className="text-lg text-rose-700/70 font-light max-w-2xl mx-auto">
            Carefully curated skincare essentials for every skin type
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-light tracking-wide text-sm uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-rose-900 text-white border border-rose-900"
                  : "bg-transparent text-rose-900 border border-rose-300 hover:border-rose-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/60 hover:border-rose-300 transition-all duration-300 hover:shadow-md rounded-md overflow-hidden"
            >
              <Link href={`/products/${product.id}`} className="flex h-full flex-col">
                {/* Product Image */}
                <div className="relative w-full h-48 bg-white/60 group-hover:bg-white transition-colors duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4 space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-rose-600/70 font-light">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-serif font-light text-rose-900 mt-1 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-rose-700/70 font-light leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-[11px] text-rose-600/70 font-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-rose-400 rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="pt-3 mt-auto border-t border-rose-200/60 flex items-center justify-between">
                    <span className="text-xl font-serif font-light text-rose-900">
                      {product.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-rose-900">
                      View Details ↗
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

