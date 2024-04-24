import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "@hooks/api/get/useGetFarmListQuery";
import FarmCard from "@components/user/community/farm-card/farm-card";
import { Button } from "@components/ui/button";
import useCmsLandingDetailsQuery from "@hooks/api/get/useCmsLandingDetailsQuery";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import useGetClientDetails from "@hooks/api/get/useGetClientDetails";
import parse from "html-react-parser";
import * as Icons from "react-icons/bi";
import { renderIcon } from "@components/lib/RenderIcon";
import { formatDate } from "../../../lib/utils";
import useGetVisionStats from "@hooks/api/get/useGetVisionStats";
type IconType = keyof typeof Icons;

interface Guide {
  time: string;
  title: string;
  description: string;
}

const ContentWhatWeDo: React.FC = () => {
  const { data: cmsDataLanding } = useCmsLandingDetailsQuery();
  const { data: cmsClientDetail } = useGetClientDetails();
  const navigate = useNavigate();

  const { approach } = {
    ...cmsDataLanding
  };

  const { data: userData } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "3"
  });

  const features = cmsDataLanding?.approach_items;

  const { data: visionStats } = useGetVisionStats();

  const formatData = (value: any) => {
    value;
    if (value && parseInt(value) >= 100000) {
      return (parseInt(value) / 1000).toFixed(0) + "k";
    }

    return parseInt(value).toLocaleString();
  };

  const stats = [
    {
      data: formatData(visionStats?.community_farms ?? "0"),
      title: "Farms"
    },
    {
      data: formatData(visionStats?.registered_farmer ?? "0"),
      title: "Farmers Registered"
    },
    {
      data: formatData(visionStats?.forums_forums_answers ?? "0"),
      title: "Answers Given"
    },
    {
      data: formatData(visionStats?.total_resources ?? "0"),
      title: "Total Resources"
    }
  ];

  const guides: Guide[] = [
    {
      time: "00:01",
      title: "Ano ang AgriHub?",
      description:
        "Samahan natin si Kuya Wil upang alamin kung paano nga ba nagsimula ang Agrihub maging ang mga mahahalagang layunin at misyon na makatutulong sa mga urban farmers ng Lungsod Quezon."
    },
    {
      time: "01:39",
      title: "Ano ang mga nilalaman ng Agrihub",
      description:
        "Tuklasin ang mga mahahalagang nilalaman ng Agrihub na una ninyong makikita matapos bisitahin ang website. Sa parteng ito ay ipapaliwanag ni Kuya Wil kung ano ang nagagawa ng mga ito."
    },
    {
      time: "03:32",
      title: "Paano mag-register ng isang farm?",
      description:
        "Ang pagkakaroon ng isang urban farming community ay isa sa pinakamahalagang misyon ng Agrihub. Alamin kung ano ang mga kinakailangang impormasyon upang mairehistro sa Agrihub ang iyong komunidad."
    }
  ];

  const { data: blogData } = useGetBlogsPublishList();
  const seeGuide = () => {
    navigate("/helps/guides");
  };

  const seeApproach = () => {
    navigate("/about/our-focus");
  };

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
              {features?.map((item, idx) => (
                <p key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-gray-700 text-green-400 rounded-lg flex items-center justify-center">
                    {renderIcon(item?.icon as IconType, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-100 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.description}</p>
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
                <Button
                  onClick={seeApproach}
                  className="mt-8 px-12 py-3"
                  variant="default"
                >
                  Show All
                </Button>
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

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center">User Guides</h2>
          <div className="divide-y divide-gray-700">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-center lg:col-span-1 col-span-full"></div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracki uppercase dark:text-violet-400">
                    {guide.time}
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    {guide.title}
                  </span>
                  <span className="mt-4 dark:text-gray-300">
                    {guide.description}
                  </span>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full my-4"
              onClick={seeGuide}
            >
              See More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentWhatWeDo;
