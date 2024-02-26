import React from "react";
import imageData1 from "@assets/images/About us.png";
import imageData2 from "@assets/images/Our-focus-BLOG.png";
import imageData3 from "@assets/images/Initiatives-1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@components/ui/button";
import useCmsLandingDetailsQuery from "@hooks/api/get/useCmsLandingDetailsQuery";

const Carousels: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const { data: cmsData } = useCmsLandingDetailsQuery();

  const {
    id,
    approach,
    approach_items,
    createdat,
    cta_description,
    cta_header,
    images,
    updatedat
  } = {
    ...cmsData
  };

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true
        }}
      >
        <CarouselContent>
          {images?.map(img => {
            return (
              <CarouselItem className="p-0" key={img.id}>
                <img
                  src={img.image}
                  className="h-[27rem] lg:h-[40rem] w-full object-cover brightness-50"
                />
              </CarouselItem>
            );
          })}
          x
        </CarouselContent>
      </Carousel>

      <div className="container absolute inset-0 flex flex-col justify-center m-auto w-full h-full z-10 space-y-2">
        <h1 className="text-2xl sm:text-6xl lg:text-9xl text-gray-100 font-poppins-semibold">
          {cta_header}
        </h1>

        <h4 className="text-md sm:text-lg text-gray-100 font-poppins-thin max-w-[55rem] ">
          {cta_description}
        </h4>

        <Button className="mt-10" variant="default">
          Community <FaArrowRightLong className="ms-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="min-h-[40rem] overflow-hidden border border-red-500">
        {/* <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true
          }}
        >
          <CarouselContent className="h-full w-full m-0">
            <CarouselItem className="p-0">
              <img
                src={imageData1}
                className="h-full w-full object-cover brightness-50"
              />
            </CarouselItem>
            <CarouselItem className="p-0">
              <img
                src={imageData2}
                className="h-full w-full object-cover brightness-50"
              />
            </CarouselItem>
            <CarouselItem className="p-0">
              <img
                src={imageData3}
                className="h-full w-full object-cover brightness-50"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel> */}
      </div>

      {/* <div className="absolute max-w-[55rem] h-max z-10 space-y-2 px-2">
        <h1 className="text-2xl sm:text-6xl lg:text-9xl text-gray-100 font-poppins-semibold">
          Join our <span className="text-primary">community</span> today!
        </h1>

        <h4 className="text-md sm:text-lg text-gray-100 font-poppins-thin ">
          Share your farm reports, access valuable resources, and connect with
          fellow farmers in our interactive forums. Empower your agriculture
          journey with AgriHub."
        </h4>

        <Button className="mt-10" variant="default">
          Learn more <FaArrowRightLong className="ms-3" />
        </Button>
      </div> */}
    </div>
  );
};

export default Carousels;
