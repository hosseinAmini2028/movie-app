import LayoutContent from "@/components/Asset/LayoutContent";
import NextImage from "@/components/Asset/NextImage";
import { Season } from "@/types";
import React from "react";

export default function SeasonList({
  seasons,
  image,
}: {
  seasons: Season[];
  image: string;
}) {
  return (
    <LayoutContent>
      {seasons.map((i) => (
        <div
          key={i.id}
          className="flex my-6 p-4 border border-solid border-gray-200 rounded-xl"
        >
          <NextImage
            src={i.poster_path ?? image}
            alt=""
            width={90}
            height={160}
          />
          <div className="pl-6 flex flex-col justify-evenly">
            <h3 className="text-xl font-semibold">{i.name}</h3>
            <div className="flex items-center gap-1">
              <span className="bg-slate-800 text-white rounded-sm p-1">
                {i.vote_average}
              </span>
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>

              <p>({new Date(Date.parse(i.air_date)).getFullYear()})</p>
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>

              <p>{`${i.episode_count} Episodes`}</p>
            </div>
            <p className="text-sm text-gray-700 leading-8">{i.overview}</p>
          </div>
        </div>
      ))}
    </LayoutContent>
  );
}
