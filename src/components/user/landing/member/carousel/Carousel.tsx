import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@components/ui/button";
import useCmsLandingDetailsQuery from "@hooks/api/get/useCmsLandingDetailsQuery";
import { Link } from "react-router-dom";

const Carousels: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const { data: cmsData } = useCmsLandingDetailsQuery();

  console.log(cmsData);

  const { cta_description, cta_header, images } = {
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
        </CarouselContent>
      </Carousel>

      <div className="container absolute inset-0 flex flex-col justify-center m-auto w-full h-full z-10 space-y-2">
        <h1 className="text-2xl sm:text-6xl lg:text-9xl text-gray-100 font-poppins-semibold">
          {cta_header}
        </h1>

        <h4 className="text-md sm:text-lg text-gray-100 font-poppins-thin max-w-[55rem] ">
          {cta_description}
        </h4>

        <Link to="/community">
          <Button className="mt-10" variant="default">
            Community <FaArrowRightLong className="ms-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Carousels;
