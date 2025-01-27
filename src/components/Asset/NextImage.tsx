"use client"
import Image from "next/image";
import React, { ComponentProps } from "react";
import imageLoader2 from "../../../public/image-placeholder.webp";

export default function NextImage({
  src,
  ...props
}: ComponentProps<typeof Image>) {
  const imageLoader = ({ src }: { src: string }) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };
  return (
    <Image
    src={`${src}`}
    loader={imageLoader}
    loading={"lazy"}
    placeholder="blur"
    blurDataURL={imageLoader2.blurDataURL}
    {...props}
    alt=""
    />
  );
}
