"use client";
import MovieCard from "@/components/Asset/MovieCard";
import SectionTitle from "@/components/Asset/SectionTitle";
import { Movie, PaginateData } from "@/types";
import { axiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CardGrid from "./CardGrid";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import FeaturedSection from "./FeaturedSection";

export default function FeaturedMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ["FeaturedMovies"],
    queryFn: async () => {
      const result = await axiosInstance.get<PaginateData<Movie>>(
        `/movie/top_rated`
      );

      return result.data.results.slice(0, 10);
    },
  });
  return (
    <FeaturedSection data={data} isLoading={isLoading} title="Featured Movies" />
  );
}
