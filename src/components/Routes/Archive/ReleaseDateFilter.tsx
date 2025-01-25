import { useFilterParams } from "@/Providers/FilterProvider";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function ReleaseDateFilter() {
  const {
    filterParams: { release_date, ...otherFilters },
    setFilterParams,
  } = useFilterParams();
  return (
    <div className="border-t border-gray-400">
      <p className="font-light mb-6">Release Date</p>

      <div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 flex-1">from</p>{" "}
          <DatePicker
            icon
            className="p-2 w-[150px] outline-0 bg-transparent border border-solid border-gray-400 rounded-xl"
            showIcon
            popperPlacement="bottom-end"
            selected={release_date?.gte}
            isClearable
            onChange={(date) =>
              setFilterParams({
                release_date: { ...release_date, gte: date },
                ...otherFilters,
              })
            }
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-500 flex-1">to</p>{" "}
          <DatePicker
            icon
            className="p-2 w-[150px] outline-0 bg-transparent border border-solid border-gray-400 rounded-xl"
            showIcon
            isClearable
            popperPlacement="bottom-end"
            selected={release_date?.lte}
            onChange={(date) =>
              setFilterParams({
                release_date: { ...release_date, lte: date },
                ...otherFilters,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
