import AddToFavorit from "@/components/Asset/AddToFavorit";
import LayoutContent from "@/components/Asset/LayoutContent";
import NextImage from "@/components/Asset/NextImage";
import { TVShowDetails } from "@/types";
import React from "react";

export default function TvShowDetails(props: TVShowDetails) {
  const {
    poster_path,
    name,
    first_air_date,
    overview,
    genres,
    vote_average,
    popularity,
    seasons,
  } = props;
  return (
    <div>
      <LayoutContent className="flex cart-body">
        <div className="card glass">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row">
              <NextImage
                src={poster_path}
                alt=""
                width={260}
                height={360}
                className="rounded-2xl mx-auto lg:mx-0"
              />

              <div className="p-5 flex flex-col justify-evenly">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="pl-2 text-gray-500">
                      ({new Date(Date.parse(first_air_date)).getFullYear()})
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <p className="inline-block max-w-fit">
                      {new Date(
                        Date.parse(first_air_date)
                      ).toLocaleDateString()}
                    </p>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    <p className="inline-block max-w-fit">
                      {genres?.map((i) => i.name).join(", ")}
                    </p>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <div className="">
                    <p>ratings : {vote_average}</p>
                    <p>popularity : {popularity}</p>
                    <p>total seseans : {seasons.length}</p>
                    <p>
                      total episodes:{" "}
                      {seasons.reduce((c, i) => c + i.episode_count, 0)}
                    </p>
                  </div>
                  <AddToFavorit {...props} type="Movie" />
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-xl">Overview</h3>

                  <p className="text-gray-600 leading-10">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContent>
    </div>
  );
}
