import Link from "next/link";

export function ProductNote({
  title,
  subtitle,
  href,
  children,
}: {
  title: string;
  subtitle: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {children}
      <div className="flex flex-col gap-1 font-medium">
        <h3 className="text-lg">{title}</h3>
        <p className="text-lg">{subtitle}</p>
      </div>
      <Link
        href={href}
        className="text-sm w-fit underline underline-offset-4 text-neutral-600 hover:text-accent hover:underline"
      >
        Читать статью
      </Link>
    </div>
  );
}
