import React from "react";
import yourImage from "@assets/images/Initiatives-1.png";

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
                INITIATIVES
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-black p-8 sm:p-12 md:p-20 lg:p-24 xl:p-32">
        <div className="w-full max-w-7xl text-justify text-md">
          <p>
            Everything is here, containing all the initiatives of the Center of
            Urban Agriculture and Innovation. The center is dedicated to
            spearheading various projects and programs aimed at advancing urban
            agriculture, fostering innovation, and addressing challenges faced
            by urban farmers. These initiatives encompass a wide range of
            activities, from knowledge-sharing events to practical solutions for
            sustainable urban farming practices. The Center of Urban Agriculture
            and Innovation is a hub for comprehensive efforts geared towards
            enhancing the landscape of urban agriculture.
          </p>
          <p className="mt-8">Click on the images below to discover them:</p>
        </div>
      </div>
    </div>
  );
};

export default Imagebanner;
