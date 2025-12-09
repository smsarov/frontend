"use client";

import { Button } from "@app/components/ui/button";
import Link from "next/link";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@app/components/ui/input-otp";
import { FormEvent } from "react";

export default function EntranceEmailCode({
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
      className="flex flex-col items-start w-[520px] gap-12 text-xl text-primary ml-20"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">
          Подтвердите адрес <br /> электронной почты
        </h1>
        <p>hello_word@mail.ru</p>
        <p>Введите код из письма</p>
      </div>

      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} className="text-5xl">
        <InputOTPGroup className="gap-5">
          <InputOTPSlot
            index={0}
            className="bg-primary text-background text-3xl rounded-l-none size-16"
          />
          <InputOTPSlot
            index={1}
            className="bg-primary text-background text-3xl rounded-none size-16"
          />
          <InputOTPSlot
            index={2}
            className="bg-primary text-background text-3xl rounded-none size-16"
          />
          <InputOTPSlot
            index={3}
            className="bg-primary text-background text-3xl rounded-r-none size-16"
          />
        </InputOTPGroup>
      </InputOTP>

      <div className="flex flex-col gap-5">
        <p>Отправим код повторно через 29 с</p>
        <Link href="/" className="underline hover:text-accent">
          Не приходит письмо?
        </Link>
      </div>

      <div className="flex flex-col w-full gap-5">
        <Button size="lg" className="w-full">
          Подтвердить почту
        </Button>
        <span className="text-xs">
          Нажимая на кнопку «Подтвердить почту», я даю согласие на обработку
          своих <br /> персональных данных в соответствии с{"  "}
          <Link href="/" className="text-accent">
            политикой обработки персональных данных
          </Link>
        </span>
      </div>
    </form>
  );
}
