"use client";

import { Button } from "@app/components/ui/button";
import Link from "next/link";

import Image from "next/image";

export default function EntranceStart({
  onPhoneClick: handlePhoneClick,
  onEmailClick: handleEmailClick,
}: {
  onPhoneClick: () => void;
  onEmailClick: () => void;
}) {
  return (
    <form className="flex flex-col items-start self-center gap-12 text-xl text-primary">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">Войти в личный кабинет</h1>
      </div>

      <div className="flex flex-row w-full justify-between *:*:rounded-full *:flex *:flex-col *:items-center *:gap-4 *:font-medium *:text-[16px] *:hover:scale-110 *:transition-all *:hover:text-accent *:hover:fill-accent">
        <Link href="/">
          <Image src="/icons/vk.svg" alt="vk" width={60} height={60} />
          <span>VK ID</span>
        </Link>
        <Link href="/">
          <Image src="/icons/yandex.svg" alt="vk" width={60} height={60} />
          <span>Яндекс ID</span>
        </Link>
        <Link href="/">
          <Image src="/icons/mts.svg" alt="vk" width={60} height={60} />
          <span>МТС ID</span>
        </Link>
      </div>

      <div className="flex flex-col items-center w-full gap-5">
        <Button size="lg" className="w-full" onClick={handlePhoneClick}>
          По номеру телефона
        </Button>

        <span>или</span>

        <Button size="lg" className="w-full" onClick={handleEmailClick}>
          По электронной почте
        </Button>

        <span className="text-xs w-full text-left">
          При входе и регистрации вы соглашаетесь на{"  "}
          <Link href="/" className="text-accent">
            обработку персональных <br /> данных
          </Link>
        </span>
      </div>
    </form>
  );
}
