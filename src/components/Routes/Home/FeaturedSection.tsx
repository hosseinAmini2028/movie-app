"use client";
import MovieCard from "@/components/Asset/MovieCard";
import SectionTitle from "@/components/Asset/SectionTitle";

import React from "react";
import CardGrid from "./CardGrid";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import { Movie, TVShow } from "@/types";

type FeaturedSectionProps = {
  isLoading: boolean;
  data: Array<Movie | TVShow> | undefined;
  title: string;
};
export default function FeaturedSection({
  isLoading,
  data,
  title,
}: FeaturedSectionProps) {
  return (
    <div>
      <SectionTitle title={title} />

      <CardGrid>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="p-2">
                <CardSkeleton />
              </div>
            ))
          : data?.map((item) => (
              <div key={item.id} className="p-2">
                <MovieCard {...(item as Movie)} key={item.id} />
              </div>
            ))}
      </CardGrid>
    </div>
  );
}
