import { Button } from "../ui/button";
import Link from "next/link";

export default function Development() {
  return (
    <div className="grid place-items-center w-full h-full">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-5xl text-primary">Данный раздел в разработке</p>
          <p className="text-xl text-greyscale/70">
            Мы в обязательном порядке сообщим Вам об обновлении
          </p>
        </div>
        <Link href="/">
          <Button size="lg" className="w-full">Перейти на главную страницу</Button>
        </Link>
      </div>
    </div>
  );
}
