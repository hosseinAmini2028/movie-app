"use client";
import { ItemType } from "@/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type SearchFieldProps = {
  query: string;
  setQuery: (query: string) => void;
  type?: ItemType;
};
export default function SearchField({
  setQuery,
  type,
  query,
}: SearchFieldProps) {
  const [s, setS] = useState(query);
  const router = useRouter();

  useEffect(() => {
    setS(query);
  }, [query]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(s);
    }, 500);
    return () => clearTimeout(timer);
  }, [s, setQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      router.push(`/search?type=${type}&query=${s}`);
    }
  };
  return (
    <div className="relative">
      <input
        value={s}
        onChange={(e) => setS(e.target.value)}
        onKeyDown={handleKeyDown}
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
