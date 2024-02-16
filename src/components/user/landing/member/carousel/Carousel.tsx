import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import imageData1 from "@assets/images/About us.png";
import imageData2 from "@assets/images/Our-focus-BLOG.png";
import imageData3 from "@assets/images/Initiatives-1.png";
import imageData4 from "@assets/images/Initiatives-3.png";

const Carousels: React.FC = () => {
  const images = [imageData1, imageData2, imageData3, imageData4];

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
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
    <div>
      <div className="box" style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Slider {...settings}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img
                alt={`sample_file_${index}`}
                src={URL}
                style={{
                  maxHeight: "656px",
                  minHeight: "656px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <section className="absolute top-16 sm:top-20 left-0 w-full h-[41rem] py-4 px-4 md:px-8 ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
        <div className="relative gap-5 w-full sm:w-1/2 items-center h-[656px] lg:flex ">
          <div className="flex-1 py-5 sm:mx-auto lg:max-w-max lg:text-left z-40">
            <h3 className="text-3xl text-gray-100 font-semibold md:text-4xl">
              Join us and be part of{" "}
              <span className="text-green-400">QCU-CUAI</span>
            </h3>
            <p className="text-gray-100 leading-relaxed mt-3">
              Quezon City University - Center for Urban Agriculture and
              Innovation is a pioneering initiative established in collaboration
              with the Department of Agriculture - Agriculture Training
              Institute (DA-ATI) and the Sustainable Development Affairs Unit
              (SDAU) of the local government. This learning hub is dedicated to
              developing diverse models of urban farms, addressing the
              challenges faced by urban farmers, and mainstreaming urban
              agriculture into Quezon City University's curriculum.
            </p>
            <Link
              className="mt-5 px-4 py-2 hover:text-green-800 font-medium hover:bg-gray-50 text-gray-50 bg-green-700 duration-200 rounded-sm inline-flex items-center"
              to="about"
            >
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousels;
