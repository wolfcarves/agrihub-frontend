import React from "react";
import yourImage from "@assets/images/Latest News Cover photo.svg";

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
        </div>
      </div>

      <div className="flex items-center justify-center text-black p-8 sm:p-12 md:p-20 lg:p-24 xl:p-32">
        <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 text-left text-md">
          <p>
            Everything is here, with all the news articles and blogs related to
            agriculture. This compilation serves as a comprehensive resource
            covering a spectrum of topics within the realm of agriculture. From
            the latest developments in farming techniques to insightful blog
            posts on agricultural innovations, this collection provides a wealth
            of information for anyone interested in the agricultural domain. The
            compilation encompasses a diverse array of perspectives, offering a
            holistic view of the current trends, challenges, and advancements in
            the field of agriculture.
          </p>
          <p className="mt-8">Click on the images below to discover them:</p>
        </div>
      </div>
    </div>
  );
};

export default Imagebanner;
