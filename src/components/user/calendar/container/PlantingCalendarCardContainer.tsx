import React from "react";

interface PlantingCalendarCardContainerProps {
  children?: React.ReactNode;
}

const PlantingCalendarCardContainer = ({
  children
}: PlantingCalendarCardContainerProps) => {
  return (
    <div className="flex flex-col border w-full max-w-[55rem] rounded-xl mt-10 mx-auto p-1 md:p-6">
      {children}
    </div>
  );
};

export default PlantingCalendarCardContainer;
