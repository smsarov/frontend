import { ChevronRight } from "lucide-react";
import { FooterQR } from "./FooterQR";
import { FooterColumn } from "./FooterColumn";
import Link from "next/link";

const about = {
  title: "О компании",
  links: [
    { label: "Документы сайта", href: "" },
    { label: "Политика обработки \n персональных данных", href: "" },
    { label: "Отзывы о нас", href: "" },
    { label: "Кто мы", href: "" },
  ],
};

const clients = {
  title: "Клиентам",
  links: [
    { label: "FAQ / частые вопросы", href: "" },
    { label: "Заказы и доставка", href: "" },
    { label: "Возврат и обмен", href: "" },
    { label: "Бонусная программа", href: "" },
    { label: "Гарантия качества", href: "" },
  ],
};

const contacts = {
  title: "Контакты",
  links: [
    { label: "Связь с руководcтвом", href: "" },
    { label: "Поставщикам", href: "" },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="w-full p-12 flex flex-row justify-around items-center bg-primary mb-10">
        <FooterQR />
        <div className="flex flex-row w-full justify-around align-baseline font-bold">
          <FooterColumn title={about.title} links={about.links} />
          <FooterColumn title={clients.title} links={clients.links} />
          <FooterColumn title={contacts.title} links={contacts.links} />
        </div>
      </div>
      <div className="w-full z-10 fixed bottom-0 flex flex-row justify-center bg-accent text-background text-2xl py-2">
        <Link href="" className="flex flex-row items-center justify-center hover:underline">
          <span>Получи до 100 бонусов за отзыв о товаре</span>
          <ChevronRight className="mt-1" />
        </Link>
      </div>
    </footer>
  );
}
