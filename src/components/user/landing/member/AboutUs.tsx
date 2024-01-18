import React, { useState } from "react";

const About = () => {
    const sliderImages = [
        "https://i.imgur.com/lD8gT33.png",
        "https://i.imgur.com/WNxogAW.png",
        "https://i.imgur.com/JaaFkfz.png",
        // Add more image URLs as needed
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
        );
      };

  return (
    <div>
         {/* Header image*/}
         <div className="p-0">
          <img
          className="w-full mt-0"
          src="https://i.imgur.com/8gNnM5D.png"
          ></img>
        </div>
    {/* Header image */}
    <div className="p-0">
          <img
          className="w-full mt-0"
          src="https://i.imgur.com/5LuXO93.png"
          ></img>
        </div>
<div className="mt-8 sm:mt-12 lg:mt-16 ">
          <p className="text-sm lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Quezon City University - Center for Urban Agriculture and Innovation 
          is a pioneering initiative established in collaboration with the Department of Agriculture - 
          Agriculture Training Institute (DA-ATI) and the Sustainable Development Affairs Unit (SDAU) 
          of the local government. This learning hub is dedicated to developing diverse models of urban 
          farms, addressing the challenges faced by urban farmers, and mainstreaming urban agriculture 
          into Quezon City University's curriculum.
 </p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">The center received funding of P14.5MM from DA-ATI to 
          establish a dynamic learning environment on the QCU campus. Notable innovations
          include a bee farm, supported by the QCU cooperative, with staff trained in beekeeping 
          by the Agriculture Producers Cooperative.
</p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Aligned with the city's commitment to sustainability, the 
         Center for Urban Agriculture and Innovation plays a vital role in reinforcing and expanding 
         Quezon City's urban farming programs. Mayor Joy Belmonte envisions the center as a key 
         player in creating a smart and sustainable city, involving students and stakeholders in the process.
 </p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Led by QCU President Dr. Theresita Atienza, the center maximizes its 
         impact by aligning programs and projects with the city's development goals. It is a vibrant community
         working towards a greener, smarter future, embracing innovation and contributing to the flourishing 
         landscape of urban agriculture in Quezon City. </p>
</div>

<div>
      {/* ... (previous code) ... */}

      <div className="mt-8 sm:mt-12 lg:mt-16 relative">
      <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
        Our Story
      </h4>
      <div className="relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button className="text-white px-4 py-2 mr-2" onClick={prevSlide}>
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full hover:filter hover:brightness-75 transition duration-900 ease-in-out"
              src="https://i.imgur.com/MRoecMt.png"
              alt="Previous Image"
            />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button className="text-white px-4 py-2" onClick={nextSlide}>
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full hover:filter hover:brightness-75 transition duration-900 ease-in-out"
              src="https://imgur.com/XhhddcW.png"
              alt="Next Image"
            />
          </button>
        </div>
        <img
      src={sliderImages[currentSlide]}
      alt={`Slide ${currentSlide + 1}`}
      className="w-full mt-3"
      style={{ height: 'auto', minHeight: '200px', maxHeight: '100vh' }}
    />
      </div>

      {/* Slider line indicator on the image */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`w-8 m:w-12 lg:w-24 px-5 h-1 bg-green mx-1 ${
              index === currentSlide
                ? 'bg-green-300' // Dark color for the current page
                : 'bg-gray-300' // Light color for other pages
            }`}
          ></div>
        ))}
      </div>
    </div>
    </div>

  {/*Mission & Vission*/}
  <div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Mission & Vision</h4>
  <img className="w-full mb-4 sm:mx-0 sm:mb-10 mt-3 sm:mt-12 lg:mt-12 " src="https://i.imgur.com/SWYwMVy.png" />
  <img className="w-full sm:mx-0" src="https://i.imgur.com/qikwYfM.png"  />
</div>


  {/*Partnership & Funding*/}
  <div className="mt-8 sm:mt-12 lg:mt-16 ">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Partnership & Funding</h4>
  <div className="flex">
  <div className="w-1/3 flex ml-4 m:ml-12 lg:ml-20 items-start mt-12 sm:mt-12 lg:mt-12">
    <img className="w-full" src="https://i.imgur.com/r47MAhb.png"/>
  </div>
  <div className="w-2/3">
    <p className="text-sm md:text-base lg:text-lg  ml-4 m:ml-12 lg:ml-10 px-5 sm:px-6 lg:px-44 mt-3 sm:mt-12 lg:mt-36 leading-relaxed py-2 ">In partnership with 
    DA-ATI, we have received  funding amounting to P14.5MM to establish the center on the QCU campus. This financial support 
    enables us to create a dynamic learning environment and implement cutting-edge projects.</p>
  </div>
</div>
  </div>

 {/* City Commitment */}
<div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
    City Commitment
  </h4>
  <div className="flex">
    <div className="w-1/2">
      <p className="text-sm md:text-base lg:text-lg ml-4 m:ml-12 lg:ml-10 px-0 sm:px-6 lg:px-10 mt-3 sm:mt-12 lg:mt-36 leading-relaxed py-2">
        Aligned with Quezon City's commitment to sustainability, our center plays a pivotal role in reinforcing and 
        expanding the city's urban farming programs. Mayor Joy Belmonte envisions the center as a key player in 
        creating a smart and sustainable city, involving students and stakeholders in the process.
      </p>
    </div>
    <div className="w-1/2 relative">
  <img className="absolute top-0 right-0 w-3/4 mr-6 m:mr-12 lg:mr-32 h-auto mt-20 sm:mt-12 lg:mt-16" src="https://i.imgur.com/nL9Csob.png" alt="Your Image" />
</div>
  </div>
</div>



{/* President Message */}
<div className="mt-8 sm:mt-12 lg:mt-28">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
    President Message
  </h4>
  <div className="flex">
    <div className="w-1/3 sm:w-1/3 flex ml-4 m:ml-12 lg:ml-20 items-start mt-8 sm:mt-12 lg:mt-12">
      <img className="w-full sm:w-3/4 h-auto" src="https://i.imgur.com/MDd9HbW.png" alt="Your Image" />
    </div>

  <div className="w-2/3">
    <p className="text-sm md:text-base lg:text-lg px-5 sm:px-6 lg:px-44   ml-4 m:ml-12 lg:ml-10 mt-2 sm:mt-4 lg:mt-36 leading-relaxed py-2 ">In partnership with 
    DA-ATI, we have received  funding amounting to P14.5MM to establish the center on the QCU campus. This financial support 
    enables us to create a dynamic learning environment and implement cutting-edge projects.</p>
  </div>
</div>
</div>

{/*Organizational Chart*/}
<div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Organizational Chart</h4>
  <img className="w-full mb-4 sm:mx-0 sm:mb-10 mt-3 sm:mt-12 lg:mt-12 " src="https://i.imgur.com/6xFPkdj.png" />
</div>

    </div>
  );
};

export default About;
