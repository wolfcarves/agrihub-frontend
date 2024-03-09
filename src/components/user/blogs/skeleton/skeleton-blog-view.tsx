import React from "react";

const SkeletonBlogView = () => {
  return (
    <div className="sm:pt-10 sm:px-8 mt-2 animate-pulse">
      <div className="w-full mx-auto max-w-5xl object-contain object-center h-[25rem] bg-gray-200"></div>

      <div className="mx-auto max-w-5xl">
        <div className="flex gap-2 h-20 bg-gray-200"></div>
      </div>

      <div className="flex items-center justify-center gap-2 py-5">
        <div className="h-12 w-12 bg-gray-200"></div>
        <div className="w-64 h-6 bg-gray-200"></div>
      </div>

      <h1 className="text-gray-800 duration-150 font-semibold text-center h-6 bg-gray-200 w-2/3 mx-auto"></h1>

      <div className="flex justify-center py-10">
        <div className="text-base text-primary rounded-md border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 h-6 w-20 bg-gray-200"></div>
        <div className="text-base text-primary rounded-md w-20 border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 h-6 bg-gray-200"></div>
      </div>

      <p className="pt-4 text-justify max-w-5xl mx-auto text-wrap">
        <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-1"></div>
      </p>
    </div>
  );
};

export default SkeletonBlogView;
