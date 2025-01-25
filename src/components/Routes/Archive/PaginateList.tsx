"use client";
import CardItem from "@/components/Asset/CardItem";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import { useFilterParams } from "@/Providers/FilterProvider";
import { Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { formatDate } from "@/utils/format-date";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PaginateList() {
  const { ref, inView } = useInView();
  const {
    filterParams: { type, release_date, sortBy, ...allFilterParams },
  } = useFilterParams();
  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies", type, allFilterParams, release_date, sortBy],
    queryFn: async ({ pageParam }) => {
      const result = await axiosInstance.get<PaginateData<Movie>>(
        `/discover/${type === "Movie" ? "movie" : "tv"}`,
        {
          params: {
            page: pageParam,
            ...allFilterParams,
            with_original_language:
              allFilterParams.with_original_language?.value,
            with_people: allFilterParams.with_people
              ?.map((i) => i.value)
              .join(","),
            "release_date.gte": formatDate(release_date?.gte),
            "release_date.lte": formatDate(release_date?.lte),
            sort_by: sortBy?.value,
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

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);
  return (
    <div className="grid flex-1 grid-cols-2 lg:grid-cols-4  gap-4 ">
      {data?.map((i) => (
        <div key={i.id}>
          <CardItem {...i} type={type} />
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
