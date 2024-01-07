import React from 'react';

const Imagebanner: React.FC = () => {
  const dummyImageUrl = 'https://via.placeholder.com/1200x900'; 

  return (
    <div>
      <div className="relative w-full h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50">
          <img
            src={dummyImageUrl}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center pl-1/4 text-white p-8">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-9xl font-semibold bg-black bg-opacity-30 p-8 m-20 uppercase tracking-wider">
  initiatives
</h1>
        </div>
      </div>

      <div className="flex items-center justify-center text-black p-20">
        <div className="w-9/12 text-left text-md">
          <p>
          Everything is here, containing all the initiatives of the Center of Urban Agriculture and Innovation. The center is dedicated to spearheading various projects and programs aimed at advancing urban agriculture, fostering innovation, and addressing challenges faced by urban farmers. These initiatives encompass a wide range of activities, from knowledge-sharing events to practical solutions for sustainable urban farming practices. The Center of Urban Agriculture and Innovation is a hub for comprehensive efforts geared towards enhancing the landscape of urban agriculture.
          </p>
          <p className='mt-8'>
          Click on the images below to discover them:
          </p>
        </div>
      </div>


    </div>
  );
};

export default Imagebanner;
