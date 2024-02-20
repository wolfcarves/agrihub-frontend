import React, { ReactNode } from "react";

interface CropStatsProps {
  label: string;
  value: string;
  icon: ReactNode;
}

const CropStats: React.FC<CropStatsProps> = ({ label, value, icon }) => {
  return (
    <div className="md:col-span-3 col-span-6 flex justify-center items-center">
      <div className="flex flex-col gap-1 justify-center items-center text-green-700">
        <span className="bg-primary/25 rounded-full p-3">{icon}</span>
        <span className="font-poppins-medium">{label}</span>
        <span className="font-poppins-semibold">{value}</span>
      </div>
    </div>
  );
};

export default CropStats;
