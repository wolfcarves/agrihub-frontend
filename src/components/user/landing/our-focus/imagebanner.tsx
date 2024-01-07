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
  our focus
</h1>
        </div>
      </div>

      <div className="flex items-center justify-center text-black p-20">
        <div className="w-9/12 text-left text-md">
          <p>
            "AgriHub" is a software being developed by the proponents, who are part of Quezon City and students of Quezon City University. The purpose of AgriHub is to address the challenges faced by urban farmers in Quezon City, including barriers in accessing agricultural knowledge and resources, limited support compared to rural counterparts, and difficulties in marketing products effectively. AgriHub aims to foster a sense of community among urban farmers, consumers, and agricultural experts, providing a platform to bridge the knowledge gap and enhance the growth and effectiveness of urban agriculture in the context of ongoing urbanization in Quezon City.
          </p>
          <p className='mt-8'>
            Following this approach, Agrihub focuses on 3 key areas. Click on the images below to discover them.
          </p>
        </div>
      </div>


    </div>
  );
};

export default Imagebanner;
