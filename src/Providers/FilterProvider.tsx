"use client";
import { ItemType, SelectOption } from "@/types";
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
  with_genres?: number;
  with_original_language?: SelectOption | null;
  with_people?: SelectOption[] | null;
  release_date?: {
    gte?: Date | null;
    lte?: Date | null;
  } | null;
  sortBy?: SelectOption | null;
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
