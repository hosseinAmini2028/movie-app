"use client";
import NextImage from "@/components/Asset/NextImage";
import SectionTitle from "@/components/Asset/SectionTitle";
import { ItemType, MovieDetailsType, TVShowDetails } from "@/types";
import { FilmIcon } from "@heroicons/react/16/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type VisitedItemsType = Array<{
  type: ItemType;
  item: MovieDetailsType | TVShowDetails;
}>;
export default function VisitedItems() {
  const [items, setItems] = useState<VisitedItemsType | null>(null);
  useEffect(() => {
    const storageItems = localStorage.getItem("visited-items");

    const parsedItems: VisitedItemsType = storageItems
      ? JSON.parse(storageItems)
      : [];

    setItems(parsedItems);
  }, []);
  return (
    <div>
      <SectionTitle title="You Visited" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {items?.map((i) => (
          <Link
            key={i.item.id}
            href={`${i.type === "Movie" ? "movie" : "tv"}/${i.item.id}`}
            className="flex relative justify-between border border-gray-400 p-3 rounded-xl"
          >
            <NextImage src={i.item.poster_path} alt="" width={50} height={75} />
            <div className="flex-1 pl-2 text-sm">
              <p>{i.item.name ?? i.item.title}</p>
              <p>{i.item.first_air_date ?? i.item.release_date}</p>
            </div>

            <span className="absolute text-gray-500 top-1 right-1">
              {i.type === "Movie" ? (
                <FilmIcon width={18} height={18} />
              ) : (
                <TvIcon width={18} height={18} />
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
