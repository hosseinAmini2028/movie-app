"use client";

import { FavoritItem, Movie, TVShow } from "@/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContext = {
  favoritList: Array<FavoritItem>;
  setFavoritList: (data: Array<FavoritItem>) => void;
  addToFavorite: (item: FavoritItem) => void;
  removeFavorite: (item: FavoritItem) => void;
};
const Context = createContext<AppContext>({
  favoritList: [],
  setFavoritList: () => [],
  addToFavorite: () => {},
  removeFavorite: () => {},
});

export const useAppContext = () => useContext(Context);

export default function AppProvider({ children }: PropsWithChildren) {
  const [favoritList, setFavoritList] = useState<Array<FavoritItem>>([]);

  useEffect(() => {
    const storageFavoritList = localStorage.getItem("favorit-list");

    if (storageFavoritList)
      setFavoritList(() => JSON.parse(storageFavoritList));
    else setFavoritList([]);
  }, []);

  const addToFavorite = (item: FavoritItem) => {
    setFavoritList([...favoritList, item]);
    localStorage.setItem(
      "favorit-list",
      JSON.stringify([...favoritList, item])
    );
  };

  const removeFavorite = (item: FavoritItem) => {
    const newFavroteList = favoritList.filter(
      (i) => i.type !== item.type || i.item.id !== item.item.id
    );
    setFavoritList(() => newFavroteList);
    localStorage.setItem("favorit-list", JSON.stringify(newFavroteList));
  };
  return (
    <Context.Provider
      value={{ favoritList, setFavoritList, addToFavorite, removeFavorite }}
    >
      {children}
    </Context.Provider>
  );
}
