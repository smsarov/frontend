"use client";

import ConsultantSVG from "@public/icons/consultant.svg";

export default function Consultant() {

  return (
    <div className="w-full p-4 flex flex-row justify-end sticky z-10" style={{ bottom: "40px" }}>
      <div className="bg-accent h-24 w-24 p-4 text-background rounded-full flex items-center justify-center shadow-lg hover:scale-90 transition-transform">
        <ConsultantSVG widht="100%" height="100%"/>
      </div>
    </div>
  );
}
