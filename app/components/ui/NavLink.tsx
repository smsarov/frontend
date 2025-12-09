"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

    console.log(pathname, href, active);

  return (
    <Link
      href={href}
      className={clsx(active && "underline", "hover:underline")}
    >
      {children}
    </Link>
  );
}