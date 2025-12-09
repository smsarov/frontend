"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@app/components/ui/Marquee";

const texts = [
  "Только оригинальная продукция",
  "Доставка по всей РФ и во все страны СНГ",
  "Подарки в каждом заказе",
];

export default function Stripe() {
  return (
    <div className="flex w-screen py-2 items-center justify-center bg-accent text-background text-xl font-medium">
      <Marquee>
        <MarqueeContent>
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem key={index} className="mx-20">
              <span>{texts[index % texts.length]}</span>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
