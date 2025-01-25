"use client";
import React, { useState } from "react";
import ToggleListType from "./ToggleListType";
import GenerFilter from "./GenerFilter";
import LanguageFilter from "./LanguageFilter";
import PersonFilter from "./PersonFilter";
import ReleaseDateFilter from "./ReleaseDateFilter";
import SortBySelect from "./SortBySelect";

export default function ListFilters() {
  const [activetab, setActiveTab] = useState<string>("");
  return (
    <div className="w-full lg:w-72 flex flex-col gap-5">
      <ToggleListType />

      <Collapse
        onClick={() =>
          setActiveTab((prev) => (prev === "filters" ? "" : "filters"))
        }
        open={activetab === "filters"}
        title="Filters"
      >
        <div className="flex flex-col gap-7">
          <ReleaseDateFilter />

          <GenerFilter />

          <LanguageFilter />

          <PersonFilter />
        </div>
      </Collapse>

      <Collapse
        onClick={() =>
          setActiveTab((prev) => (prev === "sorts" ? "" : "sorts"))
        }
        open={activetab === "sorts"}
        title="Sort"
      >
        <div className="flex flex-col gap-7">
          <SortBySelect />
        </div>
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
    <div
      onClick={onClick}
      className="collapse collapse-arrow overflow-visible bg-base-200"
    >
      <input
        type="radio"
        onChange={() => {}}
        name="my-accordion-2"
        checked={open}
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div onClick={(e) => e.stopPropagation()} className="collapse-content">
        {children}
      </div>
    </div>
  );
}
