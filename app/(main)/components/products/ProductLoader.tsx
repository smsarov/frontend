"use client";

import type { Product } from "@app/(main)/types/product";
import { ProductCard } from "./ProductCard";
import { Button } from "@app/components/ui/button";
import { useState } from "react";

interface ProductGridProps {
  initialProducts: Product[];
  title?: string;
  loadMore?: () => Promise<Product[]>;
}

export function ProductLoader({
  title,
  initialProducts,
  loadMore,
}: ProductGridProps) {
  const [products, setProducts] = useState(initialProducts);

  const handleClick = async () => {
    const newProducts = loadMore ? await loadMore() : products;
    setProducts(newProducts);
  };

  return (
    <div className="flex flex-col gap-5">
      {title && <h1 className="text-5xl text-primary">{title}</h1>}
      <div className="w-full grid justify-between gap-5 grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={`${product.src}-${index}`} product={product} />
        ))}
      </div>
      <Button size="lg" onClick={handleClick}>
        Показать больше товаров
      </Button>
    </div>
  );
}
