"use client";
import { ItemType, Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<ItemType | null>(null);
  const queryParams = useSearchParams();

  useEffect(() => {
    const queryUrl = queryParams.get("query");
    const typeUrl = queryParams.get("type");

    setQuery(queryUrl ?? "");

    setType((typeUrl ?? "Movie") as ItemType);
  }, [queryParams]);

  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", type, query],
    queryFn: async ({ pageParam }) => {
      const result = await axiosInstance.get<PaginateData<Movie>>(
        `/search/${type === "Movie" ? "movie" : "tv"}`,
        {
          params: {
            page: pageParam,
            query,
          },
        }
      );

      return result.data;
    },
    getNextPageParam: function (lastPage) {
      return lastPage.page + 1;
    },
    initialPageParam: 1,

    select: useCallback(
      (results: InfiniteData<PaginateData<Movie>, number>) => {
        return results.pages.flatMap((i) => i.results);
      },
      []
    ),
  });

  return {
    data,
    isFetching,
    fetchNextPage,
    type,
    query,
  };
}
