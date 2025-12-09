"use client";

import { Button } from "@app/components/ui/button";
import Link from "next/link";
import { FormEvent } from "react";

export default function EntrancePhone({
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
      className="flex flex-col items-start w-[560px] gap-12 text-xl text-primary mt-20"
    >
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-5xl w-full">
          Введите номер телефона
        </h1>
        <p>Отправим код из 4 цифр в СМС</p>
      </div>

      <input
        type="tel"
        name="phone"
        required
        placeholder=""
        className="w-full p-2.5 border-b-2 border-primary outline-none focus:border-accent transition-colors peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
      />

      <div className="flex flex-col w-full gap-5">
        <Button size="lg" className="w-full">
          Получить код
        </Button>
        <span className="text-xs">
          Нажимая на кнопку «Получить код»,, я даю согласие на обработку своих{" "}
          <br /> персональных данных в соответствии с
          <Link href="/" className="text-accent">
            политикой обработки персональных данных
          </Link>
        </span>
      </div>
    </form>
  );
}
