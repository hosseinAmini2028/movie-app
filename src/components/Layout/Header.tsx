import React from "react";
import LayoutContent from "../Asset/LayoutContent";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./Searchbox";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 bg-neutral-100 min-h-14 left-0 right-0 border-b border-solid border-slate-200">
      <LayoutContent className="lg:py-0 flex items-center justify-between">
        <nav className="hidden lg:flex  items-center">
          <Link className="mx-3" href={"/"}>
            <Image alt="Movie app" src={"/logo.png"} width={55} height={55} />
          </Link>

          <Link className="mx-3 font-semibold" href="/movies">
            Movies
          </Link>
          <Link className="mx-3 font-semibold" href="/tv">
            TV Shows
          </Link>
        </nav>

        <SearchBox />
      </LayoutContent>
    </header>
  );
}
