import React from "react";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "@hooks/api/get/useGetFarmListQuery";
import FarmCard from "@components/user/community/farm-card/farm-card";
import { blogData, blog_image } from "../../../../constants/data";
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

const ContentWhatWeDo: React.FC = () => {
  const { data: cmsData } = useCmsLandingDetailsQuery();

  const { id, approach, approach_items, createdat, images } = {
    ...cmsData
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

  return (
    <div className="w-full mx-auto my-0 md:my-15 mb-8">
      {/* our mission part */}

      <div className="container flex flex-col md:flex-row gap-10 justify-between md:items-center py-6 md:py-10 lg:py-14">
        <div className="space-y-3 w-full max-w-[40rem]">
          <h3 className="text-4xl font-poppins-semibold tracking-tight">
            Our Mission
          </h3>

          <p>
            To showcase and provide innovative farming technology to the
            communities to become productive in adapting urban agriculture in a
            modern way through collaboration and capacity building.
          </p>
        </div>

        <Button className="w-max" variant="default">
          Learn more
        </Button>
      </div>

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
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-gray-700 text-green-400 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
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
      <section className="p-4 mt-12 max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl text-gray-800 font-semibold">Our Focus</h1>
          <p className="mt-3 text-gray-500">
            Explore urban ag innovation with us! Discover how we're
            revolutionizing farming in Quezon City through technology and
            community collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5 my-8">
          {blogData?.data
            ?.filter(item => item.category === "Our Focus")
            .slice(0, 3)
            .map((item, index) => {
              return (
                <Link to={`/blogs/view/${item.id}`} key={index}>
                  <div className="group flex flex-col">
                    <div className="max-h-370px max-w-750px overflow-hidden">
                      <img
                        src={item?.thumbnail}
                        alt={item.title}
                        className="w-full rounded-lg max-h-64 min-h-64 object-cover group-hover:scale-110 duration-300"
                      />
                    </div>

                    <div className="mt-3">
                      <h5 className="font-bold mt-1">
                        {item.category}{" "}
                        <span className="text-green-700">{">"}</span>
                      </h5>
                      <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg line-clamp-2">
                        {item?.title}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/about/our-focus" className="w-full">
            <Button variant="outline" className="w-full">
              See More
            </Button>
          </Link>
        </div>
      </section>

      {/* vision part */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Vision Continues
            </h3>
            <p className="mt-3">
              To be recognized as one of the model projects in Quezon City that
              can support food security and contribute to the sustainability and
              innovation of urban agriculture through modern technologies.
            </p>
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
