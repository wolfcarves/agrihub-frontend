import React from "react";
import { useParams } from "react-router-dom";
import useGetFarmViewQuery from "../../../../../hooks/api/get/useGetFarmViewQuery";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AboutSection = () => {
  const { id } = useParams();
  const { data: farmDetails } = useGetFarmViewQuery(id || "");
  return (
    <div className="bg-white rounded-md p-4 shadow">
      <h4 className=" font-poppins-medium mb-4 flex items-center gap-1">
        <IoIosInformationCircleOutline className="text-primary text-xl" />
        About
      </h4>
      <div className="px-4">
        <div className="grid grid-cols-12 mb-1">
          <span className=" font-poppins-medium col-span-2">Description</span>
          <span className=" col-span-10">{farmDetails?.description}</span>
        </div>
        <div className="grid grid-cols-12 ">
          <span className=" font-poppins-medium col-span-2">Land Size</span>
          <span className=" col-span-10">{farmDetails?.size} &#x33A1;</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
