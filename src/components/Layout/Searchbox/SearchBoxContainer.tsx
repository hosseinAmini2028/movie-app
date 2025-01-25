"use client";
import React, { useState } from "react";
import SearchField from "./SearchField";
import { useQuery } from "@tanstack/react-query";
import { ItemType, Movie, PaginateData, TVShow } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import NextImage from "@/components/Asset/NextImage";
import IconLoading from "@/components/Asset/IconLoading";
import usePopup from "@/hooks/usePopup";
import {  FilmIcon, TvIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function SearchBoxContainer() {
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<ItemType>("Movie");
  const { open, setOpen, wrapperRef } = usePopup();

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["Search333", type, query],
    queryFn: async () => {
      const result = await axiosInstance.get<PaginateData<Movie | TVShow>>(
        `/search/${type === "Movie" ? "movie" : "tv"}`,
        { params: { query } }
      );

      setOpen(true);
      return result.data.results.slice(0, 6);
    },

    enabled: query.length > 0,
  });
  return (
    <div
      onClick={() => isSuccess && setOpen(true)}
      ref={wrapperRef}
      className="w-full relative max-w-md"
    >
      <SearchField type={type} query={query} setQuery={setQuery} />

      {open ? (
        <div className="card bg-base-100 w-full mt-3 shadow-xl absolute left-0 right-0">
          {type === "TVShow" ? (
            <button
              onClick={() => setType("Movie")}
              className="flex items-center gap-2 p-3"
            >
              <FilmIcon width={22} height={22} />
              <span>Movies Search</span>
            </button>
          ) : (
            <button
              onClick={() => setType("TVShow")}
              className="flex items-center gap-2 p-3"
            >
              <TvIcon width={22} height={22} />
              <span>TV Shows Search</span>
            </button>
          )}
          {data?.length ? (
            <div className="card-body p-3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center cursor-pointer border-b border-gray-200"
                >
                  <NextImage
                    width={40}
                    height={60}
                    alt=""
                    src={item.poster_path}
                  />

                  <div className="flex-1 pl-4">
                    <p className="text-sm font-medium">
                      {item.title ?? item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item.release_date ?? item.first_air_date}
                    </p>
                  </div>

                  <button className="flex items-center">
                    details
                    <ChevronRightIcon width={16} height={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {isFetching ? (
        <span className="absolute right-2 top-[50%] -translate-y-[50%]">
          <IconLoading width={32} height={32} />
        </span>
      ) : null}
    </div>
  );
}
