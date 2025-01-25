import LayoutContent from "@/components/Asset/LayoutContent";
import ListFilters from "@/components/Routes/Archive/ListFilters";
import PaginateList from "@/components/Routes/Archive/PaginateList";
import React from "react";

export default function TVShowsPage() {
  return (
    <LayoutContent className="flex flex-col lg:flex-row gap-4 justify-between">
      <ListFilters />
      <PaginateList />
    </LayoutContent>
  );
}
