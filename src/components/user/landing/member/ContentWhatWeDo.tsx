import React from "react";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "@hooks/api/get/useGetFarmListQuery";
import FarmCard from "@components/user/community/farm-card/farm-card";
import { Button } from "@components/ui/button";
import {
  MdDevices,
  MdOutlineAnalytics,
  MdOutlineCalendarMonth,
  MdOutlineForum
} from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";
import useCmsLandingDetailsQuery from "@hooks/api/get/useCmsLandingDetailsQuery";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import useGetClientDetails from "@hooks/api/get/useGetClientDetails";
import parse from "html-react-parser";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowForward } from "react-icons/io";
import { formatDate } from "../../../lib/utils";

const ContentWhatWeDo: React.FC = () => {
  const { data: cmsDataLanding } = useCmsLandingDetailsQuery();
  const { data: cmsClientDetail } = useGetClientDetails();

  const { approach, images } = {
    ...cmsDataLanding
  };

  const { data: userData } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "3"
  });

  const features = [
    {
      icon: <MdDevices className="w-6 h-6" />,
      title: "Progressive Web Application",
      desc: "Discover our Progressive Web Application (PWA), designed to provide a seamless platform experience across all your devices. Whether you're on your smartphone or desktop, access and download our PWA to enjoy our platform effortlessly."
    },
    {
      icon: <MdOutlineAnalytics className="w-6 h-6" />,
      title: "Prescriptive Analytics",
      desc: "Gain actionable insights and recommendations tailored to your farm's needs with our Prescriptive Analytics feature. Utilize data-driven decision-making to optimize your crop yields and resource allocation, maximizing profitability."
    },

    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Resources",
      desc: "Access an extensive library of articles, blogs, and learning materials. Stay updated with the latest trends, techniques, and insights from other farmers to optimize your farm's productivity."
    },
    {
      icon: <MdOutlineCalendarMonth className="w-6 h-6" />,
      title: "Planting Calendar",
      desc: "Stay organized and optimize your planting schedule with our intuitive Planting Calendar. Discover the best crops to plant and harvest each month"
    },
    {
      icon: <RiCommunityLine className="w-6 h-6" />,
      title: "Community",
      desc: "Connect with fellow farmers, agricultural experts, and enthusiasts in our vibrant Community. Share knowledge, experiences, and best practices, fostering collaboration and growth within the agricultural industry."
    },
    {
      icon: <MdOutlineForum className="w-6 h-6" />,
      title: "Forums",
      desc: "Engage in discussions, ask questions, and share insights with a diverse community of farmers, agricultural professionals, and enthusiasts. Exchange ideas, troubleshoot problems, and discover innovative solutions to challenges in farming and agribusiness."
    }
  ];

  const stats = [
    {
      data: "700+",
      title: "Farms"
    },
    {
      data: "21k+",
      title: "Farmers Registered"
    },
    {
      data: "36k+",
      title: "Answers Given"
    },
    {
      data: "30M+",
      title: "Total Resources"
    }
  ];

  const { data: blogData } = useGetBlogsPublishList();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="w-full mx-auto my-0 md:my-15 mb-8">
      {/* our mission part */}

      <div className="container flex flex-col md:flex-row gap-10 justify-between md:items-center py-6 md:py-10 lg:py-14  mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="space-y-3 w-full max-w-[40rem]">
          <h3 className="text-4xl font-poppins-semibold tracking-tight">
            Our Mission
          </h3>

          <p>{cmsClientDetail?.mission}</p>
        </div>

        <Link to="about">
          <Button className="w-max" variant="default">
            Learn more
          </Button>
        </Link>
      </div>
      {/* <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true
        }}
        className="py-4 max-w-full sm:max-w-7xl mx-auto"
      >
        <CarouselContent className="">
          {images?.map(img => {
            return (
              <CarouselItem
                className="sm:pl-1 md:basis-1/2 lg:basis-1/4 "
                key={img.id}
              >
                <img
                  src={img.image}
                  className="w-full object-cover min-h-72 max-h-72 rounded-lg"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel> */}

      {/* our approach part */}
      <section className="relative py-16 bg-gray-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
          <div className="w-full">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Our Approach
            </h3>
            <p className="mt-3">{approach}</p>
          </div>
          <div className="mt-12 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2">
              {features.map((item, idx) => (
                <p key={idx} className="flex shadow-lg gap-x-4">
                  <div className="flex-none w-12 h-12 bg-gray-700 text-green-400 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </p>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(102, 252, 132, 0.2) 4.54%, rgba(121, 249, 121, 0.26) 34.2%, rgba(102, 252, 132, 0.1) 77.55%)"
          }}
        ></div>
      </section>

      {/* our focus part */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8 bg-main shadow-md">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h3 className="text-4xl font-poppins-semibold tracking-tight">
                    Our Focus
                  </h3>

                  <p className="mt-">
                    Explore urban ag innovation with us! Discover how we're
                    revolutionizing farming in Quezon City through technology
                    and community collaboration.
                  </p>
                </header>

                <Link to="/about/our-focus">
                  <Button className="mt-8 px-12 py-3" variant="default">
                    Show All
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 grid-rows-1 gap-5 my-4">
                {blogData?.data
                  ?.filter(item => item.category === "Our Focus")
                  .slice(0, 2)
                  .map((item, index) => {
                    return (
                      <Link to={`/blogs/view/${item.id}`} key={index}>
                        <article className="group relative overflow-hidden rounded-sm shadow transition hover:shadow-lg">
                          <img
                            alt={item.title}
                            src={item.thumbnail}
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 duration-300"
                          />

                          <div className="relative bg-gradient-to-t from-gray-900/95 to-gray-900/0 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                              <time className="block text-xs text-white/90">
                                {formatDate(item.createdat || "")}
                              </time>

                              <h3 className="line-clamp-1 mt-0.5 text-lg font-poppins-semibold text-white">
                                {item.title}
                              </h3>

                              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                {parse(item.content || "")}
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vision part */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Vision Continues
            </h3>
            <p className="mt-3">{cmsClientDetail?.vision}</p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-4xl text-green-600 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* farms part */}
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Who's using AgriHub?
            </h3>
            <p className="text-gray-600 mt-3">
              This are some of the registered farm within the community{" "}
              <Link to="/community/explore">explore</Link>
            </p>
          </div>
          <div className="mt-12 flex justify-between">
            <div className="grid grid-cols-6 gap-2">
              {data?.farms
                ?.filter(farm => farm.id !== userData?.farm_id)
                .map((farm, i) => <FarmCard farm={farm} key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWhatWeDo;
