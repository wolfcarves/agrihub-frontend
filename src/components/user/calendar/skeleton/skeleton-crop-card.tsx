import React from "react";

interface SkeletonCropCardProps {
  count: number;
}

const SkeletonCropCard: React.FC<SkeletonCropCardProps> = ({ count }) => {
  const skeletonItems = [];
  for (let i = 0; i < count; i++) {
    skeletonItems.push(
      <div key={i} className="flex flex-col items-center py-10 px-10">
        <p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-1 ring-gray-300 dark:ring-gray-600"></p>
        <h1 className="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <p className="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    );
  }

  return <>{skeletonItems}</>;
};

export default SkeletonCropCard;
