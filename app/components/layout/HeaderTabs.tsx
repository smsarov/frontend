import { NavLink } from "@app/components/ui/NavLink";
import { Catalog } from "./Catalog";

interface HeaderTabsProps {
  tabs: { href: string; label: string }[];
}

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@app/components/ui/hover-card";

<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>;

export default function HeaderTabs({ tabs }: HeaderTabsProps) {
  return (
    <nav className="w-full mx-4">
      <ul className="flex flex-row w-full justify-around items-center">
        {tabs.map(({ href, label }) => (
          <li key={`${label}-${href}`}>
            {href === "/catalog" ? (
              <HoverCard>
                <HoverCardTrigger href="" className="hover:underline">
                  {label}
                </HoverCardTrigger>
                <HoverCardContent className="mt-12 min-w-[98vw] min-h-[90vh]">
                  <Catalog />
                </HoverCardContent>
              </HoverCard>
            ) : (
              <NavLink href={href}>{label}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
