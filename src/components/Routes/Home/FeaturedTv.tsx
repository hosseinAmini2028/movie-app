"use client";
import { Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import FeaturedSection from "./FeaturedSection";

export default function FeaturedTv() {
  const { data, isLoading } = useQuery({
    queryKey: ["FeaturedTvShows"],
    queryFn: async () => {
      const result = await axiosInstance.get<PaginateData<Movie>>(
        `/tv/top_rated`
      );

      return result.data.results.slice(0, 10);
    },
  });
  return (
    <FeaturedSection
      data={data}
      isLoading={isLoading}
      title="Featured TV Shows"
    />
  );
}
