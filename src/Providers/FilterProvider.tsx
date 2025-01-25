"use client";
import { ItemType } from "@/types";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type FilterParams = {
  type: ItemType;
  with_genres ?: number
};

type FilterState = {
  filterParams: FilterParams;
  setFilterParams: (filters: FilterParams) => void;
};
const FilterContext = createContext<FilterState>({
  filterParams: {
    type: "Movie",
  },
  setFilterParams: () => {},
});

export const useFilterParams = () => useContext(FilterContext);

export default function FilterProvider({ children }: PropsWithChildren) {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    type: "Movie",
  });

  const pathname = usePathname();

  console.log({ pathname });

  useEffect(() => {
    setFilterParams((prev) => ({
      ...prev,
      type: pathname === "/tv" ? "TVShow" : "Movie",
    }));
  }, [pathname]);
  return (
    <FilterContext.Provider value={{ filterParams, setFilterParams }}>
      {children}
    </FilterContext.Provider>
  );
}
