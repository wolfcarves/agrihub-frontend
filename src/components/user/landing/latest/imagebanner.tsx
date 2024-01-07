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
  latest news
</h1>
        </div>
      </div>

      <div className="flex items-center justify-center text-black p-20">
        <div className="w-9/12 text-left text-md">
          <p>
          Everything is here, with all the news articles and blogs related to agriculture. This compilation serves as a comprehensive resource covering a spectrum of topics within the realm of agriculture. From the latest developments in farming techniques to insightful blog posts on agricultural innovations, this collection provides a wealth of information for anyone interested in the agricultural domain. The compilation encompasses a diverse array of perspectives, offering a holistic view of the current trends, challenges, and advancements in the field of agriculture.
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
