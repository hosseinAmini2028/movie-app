"use client";
import { ItemType, MovieDetailsType, TVShowDetails } from "@/types";
import  { useEffect } from "react";

export default function VisitItem({
  item,
  type,
}: {
  item: MovieDetailsType | TVShowDetails;
  type: ItemType;
}) {
  useEffect(() => {
    const storageItems = localStorage.getItem("visited-items");

    const parsedItems: Array<{
      type: ItemType;
      item: MovieDetailsType | TVShowDetails;
    }> = storageItems ? JSON.parse(storageItems) : [];

    if (parsedItems.find((i) => i.type === type && i.item.id === item.id))
      return;

    const newItems = [{ type, item }, ...parsedItems.slice(0, 9)];

    localStorage.setItem("visited-items", JSON.stringify(newItems));
  }, [item, type]);
  return null;
}
