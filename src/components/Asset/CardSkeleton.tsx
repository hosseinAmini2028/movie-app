import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CardSkeleton() {
  return (
    <div className="card glass relative">
      <div>
        <div>
          <Skeleton borderRadius={"0.75rem"} height={360}/>
        </div>
        <div className="card-body gap-[0.3rem] relative p-1">
          <Skeleton height={20}/>
          <Skeleton width={120} />

          <Skeleton width={80} />

          <div className="absolute bottom-2 right-2">
            <Skeleton width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
