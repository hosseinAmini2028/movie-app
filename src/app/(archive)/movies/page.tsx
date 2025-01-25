import LayoutContent from "@/components/Asset/LayoutContent";
import ListFilters from "@/components/Routes/Archive/ListFilters";
import PaginateList from "@/components/Routes/Archive/PaginateList";
import React from "react";

export default function MoviesPage() {
  return (
    <LayoutContent className="flex gap-4 justify-between">
      <ListFilters />
      <PaginateList />
    </LayoutContent>
  );
}
