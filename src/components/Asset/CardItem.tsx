import { BaseItem, ItemType, Movie, TVShow } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToFavorit from "./AddToFavorit";
import NextImage from "./NextImage";
import { StarIcon } from "@heroicons/react/16/solid";

type CardItemProps = (Movie | TVShow) & { type: ItemType };

export default function CardItem(props: CardItemProps) {
  const {
    poster_path,
    title,
    release_date,
    first_air_date,
    id,
    vote_average,
    type,
  } = props;
  return (
    <div className="card glass relative">
      <Link href={`/${type}/${id}`}>
        <figure className="rounded-sm">
          <NextImage
            className="rounded-xl"
            width={240}
            height={360}
            alt=""
            src={poster_path}
          />
        </figure>
        <div className="card-body relative p-1">
          <h4 className="card-title text-[1.1rem]">{title}</h4>
          <p className="text-gray-500 font-light text-sm">
            {release_date ?? first_air_date}
          </p>

          <span className="badge badge-accent badge-outline">
            <StarIcon width={16} height={16} />
            <p>{Math.round(vote_average * 100) / 100}</p>
          </span>

          <div className="absolute bottom-2 right-2">
            <AddToFavorit {...props} />
          </div>
        </div>
      </Link>
    </div>
  );
}
