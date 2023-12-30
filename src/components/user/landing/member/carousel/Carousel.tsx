import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);
  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co/ncrXc2V/1.png',
      text: 'Slide 1 Text',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/B3s7v4h/2.png',
      text: 'Slide 2 Text',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/XXR8kzF/3.png',
      text: 'Navvii maganda qtqt',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    setAutoSlideInterval(interval);

    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, [slides.length, autoSlideInterval]);

  return (
    <div className="relative w-full h-3/4 mx-auto">
      <div className="relative flex items-center justify-center h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-4xl">{slide.text}</p>
            </div>
            <div
              className={`absolute w-full h-auto bg-red-700 opacity-50 ${
                index === currentSlide ? 'opacity-75' : 'opacity-0'
              }`}
            ></div>
          </div>
        ))}
        <div className="absolute left-0 top-60">
          <button
            className="text-white text-9xl px-4 py-2 rounded-l h-full w-15vw"
            onClick={prevSlide}
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
            }}
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-0 top-60">
          <button
            className="text-white text-9xl px-4 py-2 rounded-r h-full w-15vw"
            onClick={nextSlide}
            style={{
              backgroundColor: 'rgba(0, 0, 255, 0.7)',
            }}
          >
            &gt;
          </button>
        </div>
        <div className="absolute bottom-2 flex items-center justify-center w-full">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-white rounded-full mx-1 cursor-pointer ${
                currentSlide === index ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => handleDotClick(index)}
              style={{ marginBottom: '3rem' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
