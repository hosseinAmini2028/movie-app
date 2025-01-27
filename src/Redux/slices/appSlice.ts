"use client"
import { FavoritItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  favoritList: Array<FavoritItem>;
}
const initialState: AppState = {
  favoritList:
    typeof window !== "undefined" && typeof document !== "undefined"
      ? JSON.parse(localStorage?.getItem("favorit-list") ?? "[]")
      : [],
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<FavoritItem>) => {
      state.favoritList = [...state.favoritList, action.payload];
      localStorage.setItem(
        "favorit-list",
        JSON.stringify([...state.favoritList, action.payload])
      );
    },

    removeFavorite: (state, action: PayloadAction<FavoritItem>) => {
      const newFavroteList = state.favoritList.filter(
        (i) =>
          i.type !== action.payload.type || i.item.id !== action.payload.item.id
      );
      state.favoritList = newFavroteList;
      localStorage.setItem("favorit-list", JSON.stringify(newFavroteList));
    },
  },

  selectors: {
    selectFavoriteList: (state) => state.favoritList,
  },
});

export const { addToFavorite, removeFavorite } = appSlice.actions;

export const { selectFavoriteList } = appSlice.selectors;
