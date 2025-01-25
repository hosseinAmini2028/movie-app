import { Movie} from "@/types";
import React from "react";
import CardItem from "./CardItem";


export default function MovieCard(props : Movie ) {
  return (
    <CardItem  {...props} type={"Movie"} />
  );
}
