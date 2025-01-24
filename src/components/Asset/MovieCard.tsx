import { Movie, TVShow } from "@/types";
import Image from "next/image";
import React from "react";
import CardItem from "./CardItem";


export default function MovieCard(props : Movie ) {
  return (
    <CardItem  {...props} type={"Movie"} />
  );
}
