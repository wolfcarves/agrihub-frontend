import React from "react";

interface PlantingCalendarOutletContainerProps {
  children?: React.ReactNode;
}

const PlantingCalendarOutletContainer = ({
  children
}: PlantingCalendarOutletContainerProps) => {
  return <div className="w-full px-3 md:px-10 pb-40">{children}</div>;
};

export default PlantingCalendarOutletContainer;
