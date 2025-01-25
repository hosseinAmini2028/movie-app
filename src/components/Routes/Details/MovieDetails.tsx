import AddToFavorit from "@/components/Asset/AddToFavorit";
import LayoutContent from "@/components/Asset/LayoutContent";
import NextImage from "@/components/Asset/NextImage";
import {  MovieDetailsType } from "@/types";
import { convertMinutesToHHMM } from "@/utils/format-date";
import React from "react";

export default function MovieDetails(props: MovieDetailsType) {
  const {
    poster_path,
    title,
    release_date,
    overview,
    genres,
    runtime,
    vote_average,
    popularity
  } = props;
  return (
    <div>
      <LayoutContent className="flex cart-body">
        <div className="card glass">
          <div className="card-body">
            <div className="flex">
              <NextImage
                src={poster_path}
                alt=""
                width={260}
                height={360}
                className="rounded-2xl"
              />

              <div className="p-5 flex flex-col justify-evenly">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="pl-2 text-gray-500">
                      ({new Date(Date.parse(release_date)).getFullYear()})
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <p className="inline-block max-w-fit">
                      {new Date(Date.parse(release_date)).toLocaleDateString()}
                    </p>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    <p className="inline-block max-w-fit">
                      {genres.map((i) => i.name).join(", ")}
                    </p>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    <p className="inline-block max-w-fit">
                      {convertMinutesToHHMM(runtime)}
                    </p>
                  </div>
                </div>

                <AddToFavorit {...props} type="Movie" />

                <div>
                  <p>ratings : {vote_average}</p>
                  <p>popularity : {popularity}</p>
                </div>

                <div>
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
