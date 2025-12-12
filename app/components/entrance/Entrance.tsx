"use client";
import { useState } from "react";

import EntranceEmailCode from "./EntranceEmailCode";
import EntrancePhoneCode from "./EntrancePhoneCode";
import EntranceEmail from "./EntranceEmail";
import EntrancePhone from "./EntrancePhone";
import EntranceStart from "./EntranceStart";
import { EntrancePhoneTroubleshooting } from "./EntrancePhoneTruobleshooting";
import { EntranceEmailTroubleshooting } from "./EntranceEmailTroubleshooting";

import { Button } from "@app/components/ui/button";
import { ChevronLeft, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@app/components/ui/sheet";

type Variants =
  | "start"
  | "email"
  | "email-code"
  | "email-trouble"
  | "phone"
  | "phone-code"
  | "phone-trouble";

export default function Entrance({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        {children}
      </SheetTrigger>
      <SheetContent className="min-w-1/2 w-1/2 gap-16 items-center flex">
        <SheetTitle className="hidden"></SheetTitle>
        <EntranceBody />
      </SheetContent>
    </Sheet>
  );
}

function EntranceBody() {
  const [variant, setVariant] = useState<Variants>("start");

  function handleBackClick() {
    if (variant === "email") return () => setVariant("start");
    if (variant === "email-code") return () => setVariant("email");
    if (variant === "email-trouble") return () => setVariant("email-code");

    if (variant === "phone") return () => setVariant("start");
    if (variant === "phone-code") return () => setVariant("phone");
    if (variant === "phone-trouble") return () => setVariant("phone-code");
  }

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      <div
        className="w-full flex flex-row items-center px-6 absolute top-12"
        style={{
          justifyContent: variant === "start" ? "flex-end" : "space-between",
        }}
      >
        {variant !== "start" && (
          <Button variant="icon" onClick={handleBackClick()}>
            <ChevronLeft className="size-9" />
          </Button>
        )}
        <SheetClose asChild>
          <Button variant="icon" className="self-end">
            <X size={35} className="size-9" />
          </Button>
        </SheetClose>
      </div>
      {variant === "start" && (
        <EntranceStart
          onEmailClick={() => setVariant("email")}
          onPhoneClick={() => setVariant("phone")}
        />
      )}
      {variant === "email" && (
        <EntranceEmail onSubmit={() => setVariant("email-code")} />
      )}
      {variant === "email-code" && (
        <EntranceEmailCode onSubmit={() => setVariant("email-code")} onTroubleshooting={() => setVariant("email-trouble")}/>
      )}
      {variant === "email-trouble" && (
        <EntranceEmailTroubleshooting />
      )}
      {variant === "phone" && (
        <EntrancePhone onSubmit={() => setVariant("phone-code")} />
      )}
      {variant === "phone-code" && (
        <EntrancePhoneCode onSubmit={() => setVariant("phone-code")} onTroubleshooting={() => setVariant("phone-trouble")}/>
      )}
      {variant === "phone-trouble" && (
        <EntrancePhoneTroubleshooting />
      )}
    </div>
  );
}
