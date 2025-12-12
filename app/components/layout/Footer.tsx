"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { FooterQR } from "./FooterQR";
import { FooterColumn } from "./FooterColumn";
import Link from "next/link";

const about = {
  title: "О компании",
  links: [
    { label: "Документы сайта", href: "/documents" },
    { label: "Политика обработки \n персональных данных", href: "/documents" },
    { label: "Отзывы о нас", href: "/reviews" },
    { label: "Кто мы", href: "/documents" },
  ],
};

const clients = {
  title: "Клиентам",
  links: [
    { label: "FAQ / частые вопросы", href: "/documents" },
    { label: "Заказы и доставка", href: "/documents" },
    { label: "Возврат и обмен", href: "/documents" },
    { label: "Бонусная программа", href: "/documents" },
    { label: "Гарантия качества", href: "/documents" },
  ],
};

const contacts = {
  title: "Контакты",
  links: [
    { label: "Связь с руководcтвом", href: "/documents" },
    { label: "Поставщикам", href: "/documents" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const hideBanner = pathname === "/aroma-box" || pathname === "/beauty-talk";

  return (
    <footer>
      <div className="w-full p-12 pb-16 flex flex-row justify-around items-center bg-primary">
        <FooterQR />
        <div className="flex flex-row w-full justify-around align-baseline font-bold">
          <FooterColumn title={about.title} links={about.links} />
          <FooterColumn title={clients.title} links={clients.links} />
          <FooterColumn title={contacts.title} links={contacts.links} />
        </div>
      </div>
      {!hideBanner && (
        <div className="w-full z-10 fixed bottom-0 flex flex-row justify-center bg-accent text-background text-2xl py-2">
          <Link href="" className="flex flex-row items-center justify-center hover:underline">
            <span>Получи до 100 бонусов за отзыв о товаре</span>
            <ChevronRight className="mt-1" />
          </Link>
        </div>
      )}
    </footer>
  );
}
