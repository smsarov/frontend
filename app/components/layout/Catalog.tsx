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

function CategoryBlock({
  options,
  path,
  index,
  handlePathChange,
}: {
  options: Category[];
  path: number[];
  index: number;
  handlePathChange: (menuIndex: number, optionIndex?: number) => void;
}) {
  return (
    <div className="flex flex-col gap-7">
      {options &&
        options.map((opt, ind) => (
          <div
            key={opt.href}
            onMouseEnter={() => handlePathChange(index, ind)}
            className={cn(
              "flex flex-row w-[440px] justify-between items-center",
              path[index] === ind && "text-accent underline"
            )}
          >
            <Link href={opt.href} className="text-3xl">
              {opt.label}
            </Link>
            {opt.children?.length && <ChevronRight />}
          </div>
        ))}
    </div>
  );
}

export function Catalog() {
  const [path, setPath] = useState<number[]>([]);

  const handlePathChange = (menuIndex: number, optionIndex?: number) => {
    const newPath = path.slice(0, menuIndex);
    if (optionIndex !== undefined && optionIndex !== null)
      newPath.push(optionIndex);
    setPath(newPath);
  };

  const optionsList = [categories];

  for (let optionIndex of path) {
    const lastOptions = optionsList.at(-1)!;
    optionsList.push(lastOptions[optionIndex].children as Category[]);
  }

  return (
    <div className="flex flex-row p-8 gap-2">
      {optionsList.map((options, index) => (
        <CategoryBlock
          key={index}
          path={path}
          index={index}
          options={options}
          handlePathChange={handlePathChange}
        />
      ))}
    </div>
  );
}
