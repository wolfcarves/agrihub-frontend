import React from "react";
import Analytics from "./analytics";
import Crops from "./crops";
import Gallery from "./gallery";

const Overview = () => {
  return (
    <div className="p-4">
      <h3 className=" font-poppins-medium">Report Overview</h3>
      <Analytics />
      <h3 className=" font-poppins-medium">Crops Overview</h3>
      <Crops />
      <h3 className=" font-poppins-medium">Gallery Overview</h3>
      <Gallery />
    </div>
  );
};

export default Overview;
