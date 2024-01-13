// Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Replace these with your actual image data
import imageData1 from '@assets/images/cover-photo-for-landing-page.png';
import imageData2 from '@assets/images/OUR-FoCuS-COVER-PHOTO.png';
import imageData3 from '@assets/images/Initiatives-cover-photo.png';
import imageData4 from '@assets/images/Latest-News-Cover-photo.png';

const imageDatas = [imageData1, imageData2, imageData3, imageData4];

const Carousel: React.FC = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-4xl text-red-600"
        onClick={() => onClick()}
      >
        &#8249;
      </div>
    );
  }

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-4xl text-red-600"
        onClick={() => onClick && sliderRef.current?.slickNext()}
      >
        &#8250;
      </div>
    );
  }

  return (
    <div className="w-full h-1/3 relative">
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {imageDatas.map((imageData, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={imageData}
              alt={`Slide ${index + 1}`}
              className="object-cover h-2/5 w-full max-w-full"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(imageDatas.length)].map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-6 h-2 bg-white rounded-full ${
                    index === dotIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
