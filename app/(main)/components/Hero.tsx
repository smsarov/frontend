import { Button } from "@app/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[600px] bg-amber-200 flex flex-row">
      <Image
        src="/raja.png"
        alt="raja.png"
        width={906}
        height={666}
        className="flex flex-1"
      />
      <div className="flex flex-col flex-1 bg-primary p-12 justify-end">
        <div className="flex flex-col gap-40">
          <div className="text-background">
            <h1 className="text-[80px]">Sast-mont</h1>
            <p className="text-[30px]">Истинная роскошь на коже</p>
          </div>
          <Button variant="secondary" size="lg">
            Перейти в каталог
          </Button>
        </div>
      </div>
    </div>
  );
}
