"use client";
import Link from "next/link";
import React from "react";

export default function ToggleListType({
  type,
  query,
}: {
  type: string;
  query: string;
}) {
  return (
    <div className="rounded-full flex justify-between border border-solid border-gray-500">
      <Link
        className={`flex-1 text-center rounded-full  p-2 ${
          type === "Movie" && "bg-slate-600 text-white "
        }`}
        href={`/search?query=${query}&type=Movie`}
      >
        Movies
      </Link>

      <Link
        className={`flex-1 text-center rounded-full  p-2 ${
          type === "TVShow" && "bg-slate-600 text-white "
        }`}
        href={`/search?query=${query}&type=TVShow`}
      >
        TV Showes
      </Link>
    </div>
  );
}
