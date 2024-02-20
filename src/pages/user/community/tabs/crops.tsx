import React from "react";
import CropHead from "../../../../components/user/community/crop/crop-head/crop-head";
import CropItems from "../../../../components/user/community/crop/crop-items/crop-items";

const Crops = () => {
  return (
    <div className=" px-4 py-5">
      <CropHead />
      <hr className="my-4" />
      <CropItems />
    </div>
  );
};

export default Crops;
