import React from "react";
import yourImage from "@assets/images/our focus.png";

const Imagebanner: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img
            src={yourImage}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center text-white">
            <div className="px-4 lg:px-24 xl:px-60 w-full">
              <h1
                style={{ fontFamily: "Arial Black" }}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-neutral-300 text-center lg:text-left xl:text-left"
              >
                OUR FOCUS
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-black py-20 sm:px-20">
        <div className="w-11/12 sm:w-9/12 text-left text-md">
          <p>
            "AgriHub" is a software being developed by the proponents, who are
            part of Quezon City and students of Quezon City University. The
            purpose of AgriHub is to address the challenges faced by urban
            farmers in Quezon City, including barriers in accessing agricultural
            knowledge and resources, and limited support compared to rural
            counterparts. AgriHub aims to foster a sense of community among
            urban farmers, consumers, and agricultural experts, providing a
            platform to bridge the knowledge gap and enhance the growth and
            effectiveness of urban agriculture in the context of ongoing
            urbanization in Quezon City.
          </p>
          <p className="mt-8">
            Following this approach, Agrihub focuses on 3 key areas. Click on
            the images below to discover them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagebanner;
