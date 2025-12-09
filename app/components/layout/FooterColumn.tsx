import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col items-center gap-7 font-medium text-center">
      <p className="text-3xl text-background">{title}</p>
      <div className="flex flex-col gap-6 text-xl items-center text-neutral-400">
        {links.map(({ label, href }) => (
          <Link href={href} key={label} className="hover:text-accent hover:underline">
            {label.split("\n").map((part) => (
              <React.Fragment key={part}>
                {part}
                <br />
              </React.Fragment>
            ))}
          </Link>
        ))}
      </div>
    </div>
  );
}
