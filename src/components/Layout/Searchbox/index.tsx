"use client";
import { usePathname } from "next/navigation";
import React from "react";
import SearchBoxContainer from "./SearchBoxContainer";

export default function Searchbox() {
  const pathName = usePathname();
  return pathName === "/search" ? null : <SearchBoxContainer />;
}
