import Hero from "./components/Hero";
import Stripe from "./components/Stripe";
import { getProducts } from "./actions/products/getProductsAction";
import { ProductCarousel } from "./components/products/ProductCarousel";
import { ProductBrandBlock } from "./components/products/ProductBrandBlock";
import { ProductLoader } from "./components/products/ProductLoader";
import { ProductNote } from "./components/products/ProductNote";
import { ProductJournal } from "./components/products/ProductJournal";
import Image from "next/image";

export default async function Main() {
  const products = await getProducts(16);

  const loadMore = async () => {
    "use server";

    return [...products, ...products.slice(0, 16)];
  };

  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="*:rounded-full *:cursor-pointer flex flex-row gap-5 items-center py-5">
        <div className="w-3.5 h-3.5 bg-primary scale-105"></div>
        <div className="bg-neutral-400 w-3 h-3"></div>
        <div className="bg-neutral-400 w-3 h-3"></div>
        <div className="bg-neutral-400 w-3 h-3"></div>
        <div className="bg-neutral-400 w-3 h-3"></div>
      </div>
      <Stripe />
      <div className="flex flex-col w-full gap-24 pt-16 px-12">
        <ProductCarousel
          label="Бестселлеры"
          products={products}
          count={4}
          href="/"
        />
        <ProductBrandBlock
          label="Louis Vuitton"
          href="/"
          insert="start"
          products={products.slice(0, 3)}
        >
          <div className="h-[560px] w-full relative">
            <Image src="/louis-vuitton.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>
        <ProductCarousel
          label="Ароматы от Quentin Bisch"
          href="/"
          products={products}
          count={4}
        />
        <ProductBrandBlock
          label="Roja Parfums"
          href="/"
          insert="start"
          products={products.slice(0, 2)}
        >
          <div className="w-[906px] h-full relative">
            <Image src="/raja.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>
        <ProductBrandBlock
          label="The House Of Oud"
          href="/"
          insert="end"
          products={products.slice(0, 2)}
        >
          <div className="w-[600px] h-full relative">
            <Image src="/the-house-of-ouds.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>
        <ProductBrandBlock
          label="Тяжелый люкс"
          href="/"
          insert="start"
          products={products.slice(0, 4)}
        >
          <div className="h-[560px] w-full relative">
            <Image src="/heavy-lux.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>
        <ProductBrandBlock
          label="Serge Lutens"
          href="/"
          insert="start"
          products={products.slice(0, 2)}
        >
          <div className="w-[650px] h-full relative">
            <Image src="/serge-lutens.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>

        <ProductJournal title="Beauty talk" href="/beauty-talk">
          <ProductNote
            title="Химия воспоминаний:"
            subtitle="Как один аромат возвращает нас в прошлое"
            href="/"
          >
            <div className="w-full h-[700px] relative">
              <Image src="/b-talk-1.png" alt="raja.png" fill />
            </div>
          </ProductNote>
          <ProductNote
            title="Тишина в мире шума: "
            subtitle="Почему мы ищем свой уникальный аромат"
            href="/"
          >
            <div className="w-full h-[700px] relative">
              <Image src="/b-talk-2.png" alt="raja.png" fill />
            </div>
          </ProductNote>
        </ProductJournal>

        <ProductCarousel
          label="Восточные ароматы"
          href="/"
          products={products}
          count={4}
        />
        <ProductBrandBlock
          label="Diptyque"
          href="/"
          insert="end"
          products={products.slice(0, 2)}
        >
          <div className="w-[650px] h-full relative">
            <Image src="/diptique.png" alt="raja.png" fill />
          </div>
        </ProductBrandBlock>
        <ProductLoader
          title="Вас может заинтересовать"
          initialProducts={products}
          loadMore={loadMore}
        ></ProductLoader>
      </div>
    </div>
  );
}
