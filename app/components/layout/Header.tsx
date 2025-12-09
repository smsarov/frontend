import Link from "next/link";

import BagIcon from "@public/icons/bag.svg";
import HeartIcon from "@public/icons/heart.svg";
import SearchIcon from "@public/icons/search.svg";
import ProfileIcon from "@public/icons/profile.svg";

import Entrance from "@app/components/entrance/Entrance";

import HeaderTabs from "./HeaderTabs";
import Logo from '@public/icons/logo.svg';

const tabs = [
  { href: "/catalog", label: "Каталог" },
  { href: "/brands", label: "Бренды" },
  { href: "/gift-ideas", label: "Идеи для подарков" },
  { href: "/certificate", label: "Подарочный сертификат" },
  { href: "/aroma-box", label: "Aroma box" },
  { href: "/beauty-talk", label: "Beauty talk" },
];

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-12 py-5 text bg-accent text-background text-2xl">
      <Link href='/' className="hover:scale-110 transition"><Logo height="80"></Logo></Link>
      <HeaderTabs tabs={tabs} />
      <ul className="flex flex-row gap-8 items-center *:hover:scale-110 *:p-0">
        <li>
          <SearchIcon width="30" height="30" />
        </li>
        <li>
          <Entrance>
            <ProfileIcon width="30" height="30" />
          </Entrance>
        </li>
        <li>
          <HeartIcon width="30" height="30" />
        </li>
        <li>
          <BagIcon width="30" height="30" />
        </li>
      </ul>
    </header>
  );
}
