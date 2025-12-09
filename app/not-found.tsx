import Header from "./components/layout/Header";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 h-full w-full justify-center items-center">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-5xl text-primary">Error 404</p>
            <p className="text-xl font-medium text-center text-neutral-700">
              Кажется что-то пошло не так! Страница, которую Вы запрашиваете, не{" "}
              <br />
              существует. Возможно, она устарела, была удалена, или был введен{" "}
              <br />
              неверный адрес в адресной строке
            </p>
          </div>
          <Link href="/">
            <Button size="lg" className="w-full">
              Перейти на главную страницу
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
