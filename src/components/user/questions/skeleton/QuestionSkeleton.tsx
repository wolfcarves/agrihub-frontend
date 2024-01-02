import React from "react";
import { Skeleton } from "../../../ui/skeleton";

const QuestionSkeleton = ({ quantity }: { quantity: number }) => {
  return (
    <>
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex space-x-4 border border-border my-5 rounded-lg p-4 shadow-md h-[150px]"
          >
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </>
  );
};

export default QuestionSkeleton;
