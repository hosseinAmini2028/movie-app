"use client";
import { useAppContext } from "@/Providers/ContextProvider";
import { ItemType, Movie, TVShow } from "@/types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";
import { toast } from "react-toastify";

export default function AddToFavorit(
  props: (Movie | TVShow) & { type: ItemType }
) {
  const { id, type } = props;
  const { favoritList, addToFavorite, removeFavorite } = useAppContext();

  const isFavirote = useMemo(() => {
    return favoritList.find((i) => i.item.id === id && i.type === type);
  }, [id, favoritList, type]);
  const handleToggleFavorit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavirote) {
      removeFavorite({ item: props, type });
    } else {
      addToFavorite({ item: props, type });
    }

    toast.success(
      isFavirote
        ? "Item Remove From Favorite List"
        : "Item Add To Favorite List"
    );
  };
  return (
    <button onClick={handleToggleFavorit} className="text-primary">
      {isFavirote ? (
        <HeartIcon width={28} height={28} fontVariant="" mode={"solid"} />
      ) : (
        <HeartIconOutline
          width={28}
          height={28}
          fontVariant=""
          mode={"solid"}
        />
      )}
    </button>
  );
}
