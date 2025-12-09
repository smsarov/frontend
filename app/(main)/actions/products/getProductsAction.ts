import type { Rating, Variant, Product } from "@app/(main)/types/product";

const product: Product = {
  src: "src1",
  name: "EX Nihilo Spiky Muse",
  price: "от 90 000 до 100 000",
  category: "Духи",

  rating: {
    total: 22,
    value: 2.13,
  },

  variants: [
    { volume: "50" },
    { volume: "100", marker: "ЗТ" },
    { volume: "120", marker: "Т" },
    { volume: "180", marker: "З" },
  ],

  inCart: 0,
  isFavourite: false,
  isTop: true
};

export async function getProducts(limit: number) {
    return Array.from({length: limit}, () => product)
}
