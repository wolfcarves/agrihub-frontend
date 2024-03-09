import React from "react";

function SkeletonCropView() {
  return (
    <div>
      <div className="m-8 relative h-[20rem] rounded-xl overflow-hidden bg-gray-200 border animate-pulse">
        <div className="w-full h-full bg-gray-200"></div>
      </div>

      <div className="mx-auto px-8 animate-pulse">
        <div className="h-24 bg-gray-200 rounded w-1/2 sm:w-1/4 mt-5"></div>
        <div className="h-10 bg-gray-200 rounded w-11/12 mt-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full mt-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full mt-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full mt-2"></div>
      </div>

      <div className="mx-8 mt-10 flex justify-between text-center animate-pulse">
        <div className="space-y-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>

        <div className="space-y-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>

        <div className="space-y-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCropView;
