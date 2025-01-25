import FilterProvider from "@/Providers/FilterProvider";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <FilterProvider>{children}</FilterProvider>;
}
