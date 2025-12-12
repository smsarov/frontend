import Link from "next/link";

export function ProductJournal({
  children,
  title,
  href,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return <div className="w-full flex flex-col gap-4">
    <Link href={href} className="text-5xl text-primary hover:text-accent hover:underline">
      {title}
    </Link>
    <div className="w-full flex flex-row justify-between gap-5">{children}</div>
  </div>;
}
