import SeasonList from "@/components/Routes/Details/SeasonList";
import TvShowDetails from "@/components/Routes/Details/TvShowDetails";
import VisitItem from "@/components/Routes/Details/VisitItem";
import { TVShowDetails } from "@/types";
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

      <SeasonList image={movie.poster_path} seasons={movie.seasons} />

      <VisitItem item={movie} type="TVShow" />
    </div>
  );
}
