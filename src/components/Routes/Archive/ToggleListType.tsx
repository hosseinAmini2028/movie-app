"use client";
import { useFilterParams } from "@/Providers/FilterProvider";
import Link from "next/link";
import React from "react";

export default function ToggleListType() {
  const { filterParams } = useFilterParams();
  return (
    <div className="rounded-full flex justify-between border border-solid border-gray-500">
      <Link
        className={`flex-1 text-center rounded-full  p-2 ${
          filterParams.type === "Movie" && "bg-slate-600 text-white "
        }`}
        href={"/movies"}
      >
        Movies
      </Link>

      <Link
        className={`flex-1 text-center rounded-full  p-2 ${
          filterParams.type === "TVShow" && "bg-slate-600 text-white "
        }`}
        href={"/tv"}
      >
        TV Showes
      </Link>
    </div>
  );
}
