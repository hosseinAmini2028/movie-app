"use client";
import SectionTitle from "@/components/Asset/SectionTitle";

import React from "react";
import CardGrid from "./CardGrid";
import CardSkeleton from "@/components/Asset/CardSkeleton";
import { ItemType, Movie, TVShow } from "@/types";
import CardItem from "@/components/Asset/CardItem";

type FeaturedSectionProps = {
  isLoading: boolean;
  data: Array<Movie | TVShow> | undefined;
  title: string;
  type : ItemType
};
export default function FeaturedSection({
  isLoading,
  data,
  title,
  type
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
                <CardItem {...(item)} type={type} key={item.id} />
              </div>
            ))}
      </CardGrid>
    </div>
  );
}
