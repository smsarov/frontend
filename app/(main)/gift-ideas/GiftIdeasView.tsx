"use client";
import { useState } from "react";
import type { Product } from "../types/product";
import { ProductLoader } from "../components/products/ProductLoader";
import { Settings2, ChevronUp, ChevronDown } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@app/components/ui/breadcrumb";

interface GiftIdeaViewProps {
  initialProducts: Product[];
}

export function GiftIdeaView({ initialProducts }: GiftIdeaViewProps) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="py-10 flex flex-col gap-10 w-full px-12 m-auto">
      <Breadcrumb className="*:text-xl items-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-accent hover:underline" href="/">Каталог</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-accent hover:underline" href="/components">Парфюмерия</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-accent">Идеи для подарков</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-5xl text-primary">Избранное</h1>
      <form className="flex flex-row *:w-[330px] justify-between w-full *:flex *:flex-row *:gap-5 *:items-center *:text-3xl">
        <div>
          <Settings2 />
          Фильтры
        </div>
        <div className="text-center w-full flex flex-row justify-center">
          {products.length} товарa
        </div>
        <div>
          По дате обновления
          <ChevronUp />
        </div>
      </form>
      <ProductLoader
        initialProducts={products}
        loadMore={async () => {
          const newProducts = [...products, ...products];
          setProducts(newProducts);
          return newProducts;
        }}
      ></ProductLoader>
    </div>
  );
}
