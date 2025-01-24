export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type PaginateData<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
export type ItemType = "Movie" | "TVShow";
export type BaseItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  release_date?: string;
  first_air_date?: string;
};

export type Movie = {
  release_date: string;
} & BaseItem;

export type TVShow = {
  first_air_date: string;
} & BaseItem;
