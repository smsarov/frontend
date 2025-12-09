"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@app/lib/utils";

interface Category {
  href: string;
  label: string;
  children?: Category[];
}

const categories: Category[] = [
  {
    href: "perfumery",
    label: "Парфюмерия",
    children: [
      { href: "all", label: "Все товары категории" },
      { href: "best", label: "Бестселлеры" },
    ],
  },
  {
    href: "cosmetics",
    label: "Косметика",
    children: [
      { href: "all", label: "Все товары категории" },
      { href: "best", label: "Бестселлеры" },
      {
        href: "concentrations",
        label: "Концентрации",
        children: [
          { href: "all", label: "Все товары категории" },
          { href: "best", label: "Бестселлеры" },
          { href: "concentrations", label: "Концентрации" },
        ],
      },
      { href: "forwhom", label: "Для кого" },
      { href: "segments", label: "Сегменты" },
      { href: "sets", label: "Наборы" },
      { href: "perfumers", label: "Парфюмеры" },
    ],
  },
  {
    href: "home",
    label: "Ароматы для дома",
    children: [
      { href: "diffusers", label: "Аромадиффузоры" },
      { href: "candles", label: "Парфюмерные свечи" },
    ],
  },
];

function CategoryBlock({ categories }: { categories: Category[] }) {
  const [currentCategoty, setCurrentCategory] = useState<Category | null>(null);

  console.log(currentCategoty);

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-7">
        {categories.map((cat) => (
          <div
            key={cat.href}
            onMouseEnter={() => setCurrentCategory(cat)}
            className={cn(
              "flex flex-row w-[440px] justify-between items-center",
              cat.href === currentCategoty?.href && "underline text-accent"
            )}
          >
            <Link href={cat.href} className="text-3xl">
              {cat.label}
            </Link>
            {cat.children?.length && <ChevronRight />}
          </div>
        ))}
      </div>
      {currentCategoty?.children && categories.includes(currentCategoty) && (
        <CategoryBlock categories={currentCategoty.children} />
      )}
    </div>
  );
}

export default function Catalog() {
  return (
    <div className="flex flex-col p-8">
      <CategoryBlock categories={categories} />
    </div>
  );
}
