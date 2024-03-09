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
import useGetClientDetails from "@hooks/api/get/useGetClientDetails";

const Carousels: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const { data: cmsData } = useCmsLandingDetailsQuery();
  const { data: cmsClientDetails } = useGetClientDetails();

  const { cta_description, cta_header, images } = {
    ...cmsData
  };

  return (
    <>
      <div className="relative max-w-7xl mx-auto w-full 2xl:h-[75vh] -mt-20 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/423619265_931080108646712_8908319447698938479_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFG1ov-SmsYbOj-l-8cR3KLEi-wu_p5yiMSL7C7-nnKI0l3joISOciiv9Yu2-3Uyuxz3NmJL48WBsddxYjO12Vo&_nc_ohc=QDpk1GqHzX4AX-qqjzo&_nc_ht=scontent.fmnl33-1.fna&oh=03_AdRugzFlQj_-DHHBOE93QbDXIbVtj4fJInkvOKMtnBkfsA&oe=66113D72"
            alt="Hero Image"
            className="w-full h-full object-cover sm:block"
          />
          <div
            className="absolute inset-0 z-0 flex items-center text-white sm:hidden"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
          ></div>
          <div className="absolute inset-0 flex items-center text-white">
            <div className="px-4">
              <div style={{ fontFamily: "Arial Black" }} className="z-50">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto lg:max-w-max lg:text-left">
                  <p className="text-green-400 sm:text-green-600 font-poppins-semibold">
                    Center for Urban Agriculture and Innovation
                  </p>
                  <h3 className="text-3xl text-slate-200 sm:text-gray-800 font-poppins-semibold md:text-4xl sm:max-w-md">
                    {cta_header}
                  </h3>
                  <p className="text-slate-200 sm:text-gray-800 font-poppins-medium leading-relaxed mt-3 max-w-lg">
                    {cta_description}
                  </p>
                  <Link to="/community">
                    <Button
                      className="mt-10 font-poppins-medium"
                      variant="default"
                    >
                      Community <FaArrowRightLong className="ms-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousels;
