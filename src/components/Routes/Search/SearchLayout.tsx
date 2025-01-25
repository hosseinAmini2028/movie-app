"use client";
import CardItem from "@/components/Asset/CardItem";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import SearchField from "@/components/Layout/Searchbox/SearchField";
import useSearch from "@/hooks/useSearch";
import { ItemType, Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ToggleListType from "./ToggleListType";

export default function SearchLayout() {
  const { ref, inView } = useInView();

  const { data, isFetching, fetchNextPage, query, type } = useSearch();
  const router = useRouter();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  const handleSetQuery = (q: string) => {
    console.log(q);
    router.push(`/search?query=${q}&type=${type}`);
  };
  return (
    <div>
      <div className="w-full max-w-sm mb-8">
        <ToggleListType type={type ?? "Movie"} query={query} />
      </div>

      <SearchField
        type={type ?? "Movie"}
        query={query}
        setQuery={handleSetQuery}
      />

      <div className="grid mt-11 flex-1 grid-cols-2 lg:grid-cols-5  gap-4 ">
        {data?.map((i) => (
          <div key={i.id}>
            <CardItem {...i} type={type ?? "Movie"} />
          </div>
        ))}

        {isFetching
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <CardSkeleton />
              </div>
            ))
          : null}

        <div ref={ref}></div>
      </div>
    </div>
  );
}
