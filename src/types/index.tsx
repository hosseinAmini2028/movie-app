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

export type SelectOption = {
  label: string;
  value: string | number;
};

export type Person = {
  adult: boolean;
  gender: boolean;
  id: number;
  name: string;
  original_name: string;
};

export type MovieDetailsType = {
  budget: number;
  genres: Gener[];
  homepage: string;
  origin_country: ["US"];
  original_language: "en";
  popularity: 338.901;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  runtime: number;
  spoken_languages: Language[];
} & Movie;

export type Season = {
  air_date: string;
  episode_count: number;
  id: 3577;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type TVShowDetails = {
  seasons: Season[];
  genres: Gener[];
} & TVShow;
