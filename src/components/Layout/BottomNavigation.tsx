"use client";
import Link from "next/link";
import React from "react";
import { FilmIcon, HomeIcon, TvIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const navItems = [
  {
    label: "Movies",
    href: "/movies",
    Icon: FilmIcon,
  },
  {
    label: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    label: "TV Shows",
    href: "/tv",
    Icon: TvIcon,
  },
];
export default function BottomNavigation() {
  const pathname = usePathname();
  return (
    <div className="lg:hidden border-t border-slate-500 fixed bottom-0 left-0 right-0 bg-slate-200 shadow-md">
      <nav className="items-center flex justify-evenly py-2">
        {navItems.map(({ Icon, href, label }) => (
          <Link
            key={href}
            className={clsx(
              `mx-3 flex flex-col items-center`,
              pathname === href && "text-gray-400"
            )}
            href={href}
          >
            <Icon width={24} height={24} />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
