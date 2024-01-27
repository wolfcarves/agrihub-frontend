// Carousel.tsx
import React, { useState } from "react";
import imageData1 from '@assets/images/cover-photo-for-landing-page.png';
import imageData2 from '@assets/images/OUR-FoCuS-COVER-PHOTO.png';
import imageData3 from '@assets/images/Initiatives-cover-photo.png';
import imageData4 from '@assets/images/Latest-News-Cover-photo.png';

const imageDatas = [imageData1, imageData2, imageData3, imageData4];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageDatas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageDatas.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="m-0 overflow-x-hidden">
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
          src={imageDatas[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full"
          style={{ height: 'auto', minHeight: '200px', maxHeight: '100vh' }}
        />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {imageDatas.map((_, index) => (
          <div
            key={index}
            className={`w-8 m:w-12 lg:w-24 px-5 h-1 bg-green mx-1 ${
              index === currentSlide
                ? 'bg-green-300'
                : 'bg-gray-300' 
            }`}
          ></div>
        ))}
      </div>
      </div>   
    </div>
  );
};

export default Carousel;
