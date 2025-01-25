"use client"
import React, { useState } from "react";
import ToggleListType from "./ToggleListType";
import GenerFilter from "./GenerFilter";

export default function ListFilters() {
  const [activetab, setActiveTab] = useState<string>("filters");
  return (
    <div className="w-72 flex flex-col gap-5">
      <ToggleListType />

      <Collapse
        onClick={() =>
          setActiveTab((prev) => (prev === "filters" ? "" : "filters"))
        }
        open={activetab === "filters"}
        title="Filters"
      >
        <GenerFilter />
      </Collapse>
    </div>
  );
}

type CollapseProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

function Collapse({ title, children, open, onClick }: CollapseProps) {
  return (
    <div onClick={onClick} className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" checked={open} />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
