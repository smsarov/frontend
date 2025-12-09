import Image from "next/image";
import Link from "next/link";

export function FooterQR() {
  return (
    <div className="w-lg p-5 text-background font-medium rounded-sm border border-neutral-600">
      <div className="w-full flex flex-col justify-center gap-8 *:w-full">
        <div className="flex flex-col items-center w-full">
          <span className="text-2xl">Telegram-канал</span>
          <Image src="/tg-qr.svg" alt="qrcode" width={187} height={220} />
        </div>
        <div className="flex flex-col gap-2.5 py-3 border-b border-t border-neutral-600">
          <p className="text-2xl">8 800 800 80 80</p>
          <p className="text-neutral-400 text-xl">
            с 09:00 до 21:00 по МСК ежедневно
          </p>
        </div>
        <form noValidate className="text-xl flex flex-col gap-5">
          <p>Будьте в курсе новостей и новинок</p>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Ввести email и подписаться"
                className="w-full p-5 border-2 border-neutral-600 rounded-sm focus:outline-none focus:border-accent transition-colors peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
            </div>
            <button className="p-5 rounded-sm border-2 border-background hover:bg-accent hover:border-accent">
              Подписаться
            </button>
          </div>
          <p className="text-neutral-400 font-normal text-[15px]">
            Подписываясь на рассылку, вы соглашаетесь с <br />
            <Link href="/" className="text-accent hover:underline">
              политикой обработки персональных данных
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
