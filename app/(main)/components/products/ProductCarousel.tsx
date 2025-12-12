"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@app/components/ui/Marquee";
import Link from "next/link";

import { ProductCard } from "./ProductCard";
import type { Product } from "../../types/product";

interface ProductCarouselProps {
  products: Product[];
  label: string;
  count: number;
  href?: string;
}

export function ProductCarousel({
  label,
  products,
  count,
  href,
}: ProductCarouselProps) {
  const items = [...products, ...products];

  const LabelComponent = href ? (
    <Link href={href} className="text-5xl text-primary hover:text-accent hover:underline">
      {label}
    </Link>
  ) : (
    <h1 className="text-5xl text-primary">{label}</h1>
  );

  return (
    <div className="flex flex-col gap-10 max-w-full h-[700px] relative mb-16">
      <div className="flex flex-row justify-between items-end">
        {LabelComponent}
      </div>

      <Marquee className="max-w-screen w-screen absolute -left-12 top-20 h-">
        <MarqueeContent className="items-center flex flex-row">
          {items.map((product, i) => (
            <MarqueeItem
              key={i}
              style={{width: `${95 / count}vw`}}
              className="px-4" // spacing between cards
            >
              <ProductCard product={product} />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
