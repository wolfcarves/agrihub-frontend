import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageData1 from "@assets/images/landing guest cover.png";
import imageData2 from "@assets/images/OUR-FoCuS-COVER-PHOTO.png";
import imageData3 from "@assets/images/Initiatives-cover-photo.png";
import imageData4 from "@assets/images/Latest-News-Cover-photo.png";

const Carousels: React.FC = () => {
  const images = [imageData1, imageData2, imageData3, imageData4];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <ul
          style={{
            margin: "0"
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    )
  };

  return (
    <div className="box" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Slider {...settings}>
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img
              alt={`sample_file_${index}`}
              src={URL}
              style={{
                maxHeight: "700px",
                width: "100%"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;
