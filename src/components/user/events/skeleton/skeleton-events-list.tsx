import React from "react";

interface SkeletonEventProps {
  count: number;
}

const SkeletonEventsList: React.FC<SkeletonEventProps> = ({ count }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="animate-pulse flex w-full mb-4">
      <div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-1/6 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded w-1/4"></div>
      </div>

      <div className="w-full px-14">
        <div className="w-full h-80 bg-gray-200 rounded"></div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>

        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>

        <div className="h-20 bg-gray-200 rounded"></div>

        <div className="h-0.5 bg-gray-200 my-3 w-full"></div>

        <div className="flex gap-4 items-center py-3 w-max bg-gray-200 rounded-lg px-2 duration-100">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-6"></div>
        </div>
      </div>
    </div>
  ));

  return <>{skeletonItems}</>;
};

export default SkeletonEventsList;
