"use client";

import { Button } from "@app/components/ui/button";
import Link from "next/link";
import { FormEvent } from "react";

export default function EntranceEmail({
  onSubmit: handleSubmit,
}: {
  onSubmit: (e: FormEvent) => void;
}) {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-start w-[520px] gap-12 text-xl text-primary ml-20"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">
          Введите адрес <br /> электронной почты
        </h1>
        <p>Отправим код из 4 цифр на почту</p>
      </div>

      <input
        type="email"
        name="email"
        required
        placeholder="Введите email"
        className="w-full p-2.5 border-b-2 border-primary outline-none focus:border-accent transition-colors peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />

      <div className="flex flex-col w-full gap-5">
        <Button size="lg" className="w-full">
          Получить код
        </Button>
        <span className="text-xs">
          Нажимая на кнопку «Получить код», я даю согласие на обработку своих{" "}
          <br /> персональных данных в соответствии с
          <Link href="/" className="text-accent">
            политикой обработки персональных данных
          </Link>
        </span>
      </div>
    </form>
  );
}
