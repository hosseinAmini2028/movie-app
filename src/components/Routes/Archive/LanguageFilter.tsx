"use client";
import { useFilterParams } from "@/Providers/FilterProvider";
import { Language } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select from "react-select";

export default function LanguageFilter() {
  const {
    filterParams: { with_original_language, ...otherFilters },
    setFilterParams,
  } = useFilterParams();
  const { data, isLoading } = useQuery({
    queryKey: ["Language"],
    queryFn: async () => {
      const reslut = await axiosInstance.get<Language[]>(
        `/configuration/languages`
      );

      return reslut.data;
    },
  });
  return (
    <div className="border-t border-gray-400">
      <p className="font-light mb-6">Language</p>

      <div className="">
        <Select
          isLoading={isLoading}
          value={with_original_language}
          onChange={(option) =>
            setFilterParams({  ...otherFilters , with_original_language: option })
          }
          options={data?.map((i) => ({
            label: i.english_name,
            value: i.iso_639_1,
          }))}
        />
      </div>
    </div>
  );
}
