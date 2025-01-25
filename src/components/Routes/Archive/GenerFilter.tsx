"use client";
import { useFilterParams } from "@/Providers/FilterProvider";
import { Gener } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function GenerFilter() {
  const { filterParams, setFilterParams } = useFilterParams();
  const { data, isLoading } = useQuery({
    queryKey: ["geners", filterParams.type],
    queryFn: async () => {
      const reslut = await axiosInstance.get<{ genres: Gener[] }>(
        `/genre/${filterParams.type === "Movie" ? "movie" : "tv"}/list`
      );

      return reslut.data.genres;
    },
  });
  return (
    <div className="border-t border-gray-400">
      <p className="font-light mb-6">Genres</p>

      <div className="flex gap-4 flex-wrap">
        {data?.map((item) => (
          <button
            onClick={() =>
              setFilterParams({ ...filterParams, with_genres: item.id })
            }
            className={clsx(
              "rounded-full text-sm py-0.5 px-2 border border-gray-500",
              filterParams.with_genres === item.id && "bg-primary text-white"
            )}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="flex gap-4 flex-wrap">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} width={120} height={20} borderRadius={9999} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
