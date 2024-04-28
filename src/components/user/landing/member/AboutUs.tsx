import useGetClientDetails from "@hooks/api/get/useGetClientDetails";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import GoogleMapsEmbed from "./googleMap";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";

const About = () => {
  const { data: cmsClientDetail } = useGetClientDetails();
  const { data: cmsAboutUs } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const aboutImages = cmsAboutUs?.images;
  const cityCommitmentMessage = cmsAboutUs?.city_commitment;
  const cityCommitmentImage = cmsAboutUs?.city_image;
  const presidentMessage = cmsAboutUs?.president_message;
  const presidentImage = cmsAboutUs?.president_image;
  const team = cmsClientDetail?.members;
  const aboutBanner = cmsAboutUs?.banner;

  return (
    <div>
      {/* Header image*/}
      <div className="p-0">
        {/* <img
          className="w-full mt-0"
          src="https://i.imgur.com/8gNnM5D.png"
        ></img> */}
      </div>
      {/* Header image */}
      <div className="p-0">
        <img className="w-full mt-0" src={S3_BASE_URL + aboutBanner}></img>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-xl mx-auto">
        <p className="text-sm lg:text-lg px-8 leading-relaxed py-3">
          {cmsAboutUs?.about_us}
        </p>
      </div>
      <div>
        {/* ... Image ... */}

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
            Our Story
          </h4>
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000
              })
            ]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true
            }}
          >
            <CarouselContent className="-ml-1">
              {aboutImages?.map((carousel, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <img
                      src={S3_BASE_URL + carousel.image}
                      className="w-auto mt-3 object-cover aspect-video"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative">
              <CarouselPrevious className="left-4 -top-32" />
              <CarouselNext className="right-4 -top-32" />
            </div>
          </Carousel>
        </div>
      </div>
      {/*Mission*/}
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-xl mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600 hidden sm:block">
          Mission & Vision
        </h4>
        <div className="flex gap-4 px-8 sm:flex-nowrap flex-wrap">
          <div className="flex justify-center items-center sm:p-10 p-5 mx-auto">
            <h2 className="font-bold text-5xl italic flex">
              M<span className="block sm:hidden">ission</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-md sm:text-lg sm:text-left text-center">
              {cmsClientDetail?.mission}
            </p>
          </div>
        </div>
      </div>
      {/*Vission*/}
      <div className="flex gap-4 px-8 sm:flex-nowrap flex-wrap max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center sm:p-10 p-5 mx-auto">
          <h2 className="font-bold text-5xl italic flex">
            V<span className="block sm:hidden">ision</span>
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-md sm:text-lg sm:text-left text-center">
            {cmsClientDetail?.vision}
          </p>
        </div>
      </div>
      {/*Partnership & Funding*/}
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-xl mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600 mb-4">
          Partnership & Funding
        </h4>
        {cmsClientDetail?.partners?.map((partners, ids) => (
          <div
            className="flex flex-wrap sm:flex-nowrap items-center px-8 mb-4"
            key={ids}
          >
            <div className="w-2/3 mx-auto sm:w-1/3 flex items-center">
              <img
                className="w-full"
                src={S3_BASE_URL + partners.logo}
                alt={cmsClientDetail.name}
              />
            </div>
            <div className="w-full sm:w-2/3 flex h-full items-center">
              <p className="text-sm sm:text-lg pl-0 px-8 sm:pl-4">
                {partners.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* City Commitment */}
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-xl mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
          City Commitment
        </h4>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div className="sm:w-1/2 flex items-center">
            <p className="text-sm sm:text-lg sm:ml-4 mx-4 px-4 sm:px-0">
              {cityCommitmentMessage}
            </p>
          </div>
          <div className="sm:w-1/2 relative flex px-8 items-center justify-center h-full">
            <img
              className="w-full sm:w-3/4 h-auto"
              src={S3_BASE_URL + cityCommitmentImage}
              alt="city commitment"
            />
          </div>
        </div>
      </div>
      {/* President Message */}
      <div className="mt-8 sm:mt-12 lg:mt-28 max-w-screen-xl mx-4 sm:mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
          President Message
        </h4>
        <div className="flex px-4 gap-4">
          <div className="w-1/3">
            <img
              className="w-full object-cover sm:w-3/4 h-full"
              src={S3_BASE_URL + presidentImage}
              alt="Your Image"
            />
          </div>

          <div className="w-2/3 flex items-center">
            <p className="text-sm sm:text-lg sm:ml-4 sm:px-0">
              {presidentMessage}
            </p>
          </div>
        </div>
      </div>
      {/*Organizational Chart*/}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet our team
            </h3>
            <p className="text-gray-600 mt-3">
              {cmsClientDetail?.name} Core Members.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team?.map((member, idx) => (
                <p key={idx}>
                  <div className="w-24 h-24 mx-auto">
                    <img
                      src={S3_BASE_URL + member.image}
                      className="w-full h-full rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg">
                      {member.name}
                    </h4>
                    <p className="text-green-600">{member.position}</p>
                    <p className="text-gray-600 mt-2">{member.description}</p>
                  </div>
                </p>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <div className="py-14" id="contact">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-primary font-semibold">Contact</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p>
                We are here to help and answer questions you might have, we're
                looking forward to hear from you! Please fill out this form or
                click the contact information below.
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <MdOutlineMail size="24" />
                    </div>
                    <a
                      href={`mailto:${cmsClientDetail?.email}`}
                      target="_blank"
                    >
                      {cmsClientDetail?.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <BsTelephone size="24" />
                    </div>
                    <a href={`tel:${cmsClientDetail?.contact_number}`}>
                      {cmsClientDetail?.contact_number}
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <IoLocationOutline size="24" />
                    </div>
                    <p>{cmsClientDetail?.address}</p>
                  </li>
                </ul>
              </div>
              <GoogleMapsEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.0230731296156!2d121.03364743760527!3d14.700012767587227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0d8a1abaadd%3A0x493213e5711bfe3d!2sQ.C.P.U%20Technical%20%26%20Vocational!5e0!3m2!1sen!2sph!4v1713659561996!5m2!1sen!2sph" />
            </div>
            <div className="flex-1 mt-12 sm:mt-24 sm:max-w-lg lg:max-w-md">
              <form
                target="_blank"
                action="https://formsubmit.co/be07a8e90d267dedd8bf6a354cb4d0e7"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="font-medium">Full name</label>
                  <Input
                    type="text"
                    required
                    name="FullName"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <Input
                    type="email"
                    name="Email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <Textarea
                    required
                    name="Message"
                    autoComplete="off"
                    className="h-32 sm:h-48"
                  ></Textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
