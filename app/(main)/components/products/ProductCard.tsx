import type { Product } from "@app/(main)/types/product";
import Image from "next/image";
import { FavoriteButton, CartButton } from "./ProductActions";
import { ProductRating } from "./ProductRating";
import { ProductVariants } from "./ProductVariants";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col rounded-lgtransition-shadow">
      {/* Image Container */}
      <div className="relative mb-4 flex aspect-square items-center justify-center  bg-neutral-100 rounded-sm">
        {/* Top Badge */}
        {product.isTop && (
          <div className="absolute h-14 flex flex-row items-center left-4 top-4 z-10 rounded-full bg-accent px-8 py-4 text-sm font-medium text-background">
            ТОП
          </div>
        )}

        {/* Favorite Button */}
        <FavoriteButton
          isFavourite={product.isFavourite}
          productId={product.src}
        />

        {/* Product Image */}
        <div className="relative h-48 w-48">
          <Image
            src={"/product-placeholder.png"}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Cart Button */}
        <CartButton inCart={product.inCart} productId={product.src} />
      </div>

      {/* Variants */}
      <ProductVariants variants={product.variants} productId={product.src} />

      {/* Rating */}
      <ProductRating rating={product.rating} />

      {/* Category */}
      <p className="mb-1 text-sm text-neutral-600">{product.category}</p>

      {/* Product Name */}
      <h3 className="mb-2 text-base font-medium text-neutral-900 line-clamp-2">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-lg font-semibold text-neutral-900">
        {product.price} ₽
      </p>
    </article>
  );
}
