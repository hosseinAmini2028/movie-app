import { DivProps } from "@/types";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function LayoutContent({
  children,
  className,
  ...props
}: DivProps) {
  return (
    <div
      className={twMerge(
        "w-full max-w-screen-xl mx-auto p-3 lg:p-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
