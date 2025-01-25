import AddToFavorit from "@/components/Asset/AddToFavorit";
import LayoutContent from "@/components/Asset/LayoutContent";
import NextImage from "@/components/Asset/NextImage";
import { MovieDetailsType } from "@/types";
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
    popularity,
  } = props;
  return (
    <div>
      <LayoutContent className="flex cart-body">
        <div className="card glass">
          <div className="card-body p-3 lg:p-6">
            <div className="flex flex-col lg:flex-row">
              <NextImage
                src={poster_path}
                alt=""
                width={260}
                height={360}
                className="rounded-2xl mx-auto lg:mx-0"
              />

              <div className="p-2 lg:p-5 mt-6 lg:mt-0  flex flex-col justify-evenly">
                <div>
                  <h1 className="text-2xl font-semibold">
                    {title}
                    <span className="pl-2 text-[16px] font-normal text-gray-500 max-w-fit">
                      ({new Date(Date.parse(release_date)).getFullYear()})
                    </span>
                  </h1>

                  <div className="flex flex-wrap justify-start items-center gap-3">
                    <p className="inline-block max-w-fit">
                      {new Date(Date.parse(release_date)).toLocaleDateString()}
                    </p>
                    <span className="w-1.5 h-1.5  hidden lg:inline-block bg-black rounded-full"></span>
                    <p className="inline-block order-3 max-w-fit">
                      {genres.map((i) => i.name).join(", ")}
                    </p>
                    <span className="w-1.5 h-1.5 hidden lg:inline-block bg-black rounded-full"></span>
                    <p className="inline-block max-w-fit">
                      {convertMinutesToHHMM(runtime)}
                    </p>
                  </div>
                </div>

                <div className="flex mt-4  justify-between">
                  <div>
                    <p>ratings : {vote_average}</p>
                    <p>popularity : {popularity}</p>
                  </div>

                  <AddToFavorit {...props} type="Movie" />
                </div>

                <div className="mt-4">
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
