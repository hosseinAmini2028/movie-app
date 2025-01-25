"use client";
import { useFilterParams } from "@/Providers/FilterProvider";
import { Gener, Language, PaginateData, Person } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import React from "react";
import Skeleton from "react-loading-skeleton";
import Select from "react-select";

export default function PersonFilter() {
  const {
    filterParams: { with_people, ...otherFilters },
    setFilterParams,
  } = useFilterParams();
  const { data, isLoading } = useQuery({
    queryKey: ["Language"],
    queryFn: async () => {
      const reslut = await axiosInstance.get<PaginateData<Person>>(
        `/search/person`,
        {
          params: { query: "j" },
        }
      );

      return reslut.data.results;
    },
  });
  return (
    <div className="border-t border-gray-400">
      <p className="font-light mb-6">Actors / Actresses</p>

      <div className="">
        <Select
          isMulti
          isLoading={isLoading}
          value={with_people}
          onChange={(option) => {
            setFilterParams({
              ...otherFilters,
              with_people: option.map((i) => i),
            });
          }}
          options={data?.map((i) => ({
            label: i.original_name,
            value: i.id,
          }))}
        />
      </div>
    </div>
  );
}
