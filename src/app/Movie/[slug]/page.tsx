import MovieDetails from "@/components/Routes/Details/MovieDetails";
import VisitItem from "@/components/Routes/Details/VisitItem";
import { MovieDetailsType } from "@/types";
import cFetch from "@/utils/cFetch";
import React from "react";

const fetchData = async (id: number): Promise<MovieDetailsType> => {
  return await cFetch(`/movie/${id}`);
};
export default async function MoviePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const movie = await fetchData(+slug);

  return (
    <div>
      <MovieDetails {...movie} />

      <VisitItem item={movie} type="Movie" />
    </div>
  );
}
