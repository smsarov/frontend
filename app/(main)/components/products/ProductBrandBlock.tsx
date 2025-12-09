import type { Product } from "@app/(main)/types/product";
import { ProductCard } from "./ProductCard";
import { Button } from "@app/components/ui/button";
import Link from "next/link";

interface ProductBrandBlockProps {
  products: Product[];
  href: string;
  label: string;
  children: React.ReactNode;
  insert: "start" | "end";
}

export function ProductBrandBlock({
  href,
  label,
  products,
  children,
  insert,
}: ProductBrandBlockProps) {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={href}
        className="text-5xl text-primary hover:text-accent hover:underline"
      >
        {label}
      </Link>

      <div className="flex flex-row flex-wrap gap-5 justify-between">
        {insert === "start" && children}

        <div className="flex flex-row flex-1 justify-between">
          {products.map((product, i) => (
            <div key={i} style={{ flexBasis: `${95 / products.length}%` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {insert === "end" && children}
      </div>

      <Button size="lg">
        <Link href={href}>Перейти к бренду</Link>
      </Button>
    </div>
  );
}
