"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

type SearchFieldProps = {
  query: string;
  setQuery: (query: string) => void;
};
export default function SearchField({ setQuery }: SearchFieldProps) {
  const [s, setS] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(s);
    }, 500);
    return () => clearTimeout(timer);
  }, [s , setQuery]);
  return (
    <div className="relative">
      <input
        value={s}
        onChange={(e) => setS(e.target.value)}
        placeholder="Search movies or TV shows"
        className="bg-transparent w-full p-2 pl-14 outline-0 border-2 border-solid border-gray-400 rounded-xl focus:border-purple-500"
      />

      <MagnifyingGlassIcon
        width={28}
        height={28}
        className="absolute left-3 top-[50%] -translate-y-[50%]"
      />
    </div>
  );
}
