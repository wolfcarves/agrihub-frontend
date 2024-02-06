import React, { ReactNode } from "react";

interface CropDetailsProps {
  label: string;
  value: any;
  icon: ReactNode;
}

const CropDetails: React.FC<CropDetailsProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-primary/25 p-2 text-green-700 rounded-md">
        {icon}
      </span>
      <span className="text-green-700 font-poppins-medium text-md">
        {label}
      </span>
      <span className="text-primary capitalize font-poppins-medium">
        {value}
      </span>
    </div>
  );
};

export default CropDetails;
