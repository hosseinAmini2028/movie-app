import MovieDetails from "@/components/Routes/Details/MovieDetails";
import SeasonList from "@/components/Routes/Details/SeasonList";
import TvShowDetails from "@/components/Routes/Details/TvShowDetails";
import { MovieDetailsType, TVShowDetails } from "@/types";
import cFetch from "@/utils/cFetch";
import React from "react";

const fetchData = async (id: number): Promise<TVShowDetails> => {
  return await cFetch(`/tv/${id}`);
};
export default async function TvPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const movie = await fetchData(+slug);

  return (
    <div>
      <TvShowDetails {...movie} />

      <SeasonList seasons={movie.seasons} />
    </div>
  );
}
