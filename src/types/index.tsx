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
  video: boolean;
  vote_average: number;
  vote_count: number;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
};

export type Movie = {
  release_date: string;
  title: string;
} & BaseItem;

export type TVShow = {
  first_air_date: string;
  name: string;
} & BaseItem;

export type FavoritItem = {
  type: ItemType;
  item: TVShow | Movie;
};

export type Gener = {
  id: number;
  name: string;
};

export type Language = {
  iso_639_1: "hi";
  english_name: string;
  name: string;
};
