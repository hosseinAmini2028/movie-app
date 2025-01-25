"use client";
import CardItem from "@/components/Asset/CardItem";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import { useFilterParams } from "@/Providers/FilterProvider";
import { Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import {
  useInfiniteQuery,
  useQuery,
  InfiniteData,
} from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PaginateList() {
  const { ref, inView } = useInView();
  const { filterParams } = useFilterParams();
  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", filterParams],
    queryFn: async ({ pageParam }) => {
      const result = await axiosInstance.get<PaginateData<Movie>>(
        `/discover/${filterParams.type === "Movie" ? "movie" : "tv"}`,
        { params: { page: pageParam, ...filterParams } }
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

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  return (
    <div className="grid flex-1 grid-cols-4 gap-4 ">
      {data?.map((i) => (
        <div key={i.id}>
          <CardItem {...i} type={filterParams.type} />
        </div>
      ))}

      {isFetching
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <CardSkeleton />
            </div>
          ))
        : null}

      <div ref={ref}></div>
    </div>
  );
}
