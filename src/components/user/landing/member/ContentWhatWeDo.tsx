import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
import {
  formatDate,
  convertToEmbedLink,
  formatDistrict
} from "../../../lib/utils";
import useGetVisionStats from "@hooks/api/get/useGetVisionStats";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import EventsCard from "@components/user/events/card/EventsCard";
import { Divider } from "@components/ui/custom";
import LoadingSpinner from "@icons/LoadingSpinner";
import extractYouTubeVideoId from "@pages/user/learning/util/extractYtUrl";
import { FaPlay } from "react-icons/fa6";
import { Badge } from "@components/ui/badge";
import { MdArrowRight } from "react-icons/md";
type IconType = keyof typeof Icons;

const ContentWhatWeDo: React.FC = () => {
  const { data: cmsDataLanding } = useCmsLandingDetailsQuery();
  const { data: cmsClientDetail } = useGetClientDetails();
  const navigate = useNavigate();

  const { approach } = {
    ...cmsDataLanding
  };

  const { data: userData, isFetching } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter:
      !isFetching && userData
        ? (formatDistrict(userData?.district || "") as
            | "District 1"
            | "District 2"
            | "District 3"
            | "District 4"
            | "District 5"
            | "District 6")
        : undefined,
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
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const guidelineVid = "https://youtu.be/58wsYvsfGJQ?si=pOJtaykgWuEGjzx7";
  const [videoSrc, setVideoSrc] = useState<string>(guidelineVid);
  // nakukuha na seconds pero yung link aralin pa

  const { data: blogData } = useGetBlogsPublishList();

  const seeApproach = () => {
    navigate("/about/our-focus");
  };

  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

  const { data: eventsData, isLoading: isEventsLoading } =
    useGetEventPublishedListQuery({
      perpage: "3",
      filter: "upcoming"
    });
  const seeEvents = () => {
    navigate("/events");
  };

  return (
    <div className="w-full mx-auto my-0 md:my-15 mb-8">
      {/* our mission part */}
      {isPreviewing && (
        <div
          className="fixed inset-0 h-full w-full flex justify-center items-center z-50 bg-black/70"
          onClick={() => setIsPreviewing(false)}
        >
          <div
            className={`relative w-[90%] aspect-video xl:w-1/2 xl:h-1/2 object-contain animate-appear bg-black`}
          >
            <div className="absolute inset-0 m-auto h-max w-max -z-10">
              <LoadingSpinner className="text-primary" />
            </div>

            <iframe
              className={`w-full h-full object-contain aspect-auto`}
              src={convertToEmbedLink(videoSrc || "")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
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
              This are some of the registered farm within{" "}
              {userData ? "your District" : "the Community"}{" "}
              <Link to="/community/explore">explore</Link>
            </p>
          </div>
          <div className="grid grid-cols-6 gap-2 mt-12">
            {data?.farms
              ?.filter(farm => farm.id !== userData?.farm_id)
              .map((farm, i) => <FarmCard farm={farm} key={i} />)}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="py-10 text-left  text-black/70">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Upcoming Events
          </h3>
          <p className="text-gray-600 mt-3">
            Meet experts who will show you how to farm in a way that's good for
            the land and for wildlife. Through hands-on activities and friendly
            discussions, you'll learn how to grow healthy crops, make soil
            strong again, and help nature thrive.
          </p>
        </div>
        {eventsData?.data?.map(data => {
          return (
            <div key={data?.id}>
              <EventsCard {...data} />
              <Divider className="py-2" />
            </div>
          );
        })}
        {eventsData?.data?.length === 3 ? (
          <>
            <Button variant="outline" className="w-full" onClick={seeEvents}>
              See More
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>

      <section className="py-12 p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-primary">
            How it works
          </span>
          <h2 className="text-5xl font-bold text-center dark:text-gray-900">
            Working with AgriHub is simple
          </h2>

          {/* <div className="w-full flex justify-center">
            <div className="w-full sm:w-1/2 py-4">
              <Button variant="outline" className=" w-full" onClick={seeGuides}>
                Know More
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      <div className="mx-auto dark:bg-gray-100 dark:text-gray-900 max-w-screen-xl">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4">
            <div className="w-full flex justify-center">
              <div className="relative w-full  aspect-video rounded-md border">
                <img
                  src={`https://i.ytimg.com/vi/${extractYouTubeVideoId(
                    videoSrc
                  )}/hqdefault.jpg`}
                  className="w-full h-full object-cover rounded-t-md"
                />

                <button
                  className="absolute inset-0"
                  onClick={e => {
                    e.preventDefault();
                    searchParams.set("preview", videoSrc);
                    setSearchParams(searchParams);
                    setIsPreviewing(true);
                  }}
                >
                  <div className="m-auto rounded-full bg-secondary w-max h-max border p-5">
                    <FaPlay className="text-primary translate-x-1" size={36} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <Badge className="text-white">Guide</Badge>
            </div>
            <h1 className="text-3xl font-semibold">Ano ang AgriHub?</h1>
            <p className="flex-1 pt-2">
              Samahan natin si Kuya Wil upang alamin kung paano nga ba nagsimula
              ang Agrihub maging ang mga mahahalagang layunin at misyon na
              makatutulong sa mga urban farmers ng Lungsod Quezon.
            </p>
            <a
              rel="noopener noreferrer"
              href="/helps/guides"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-primary"
            >
              <span>Read more</span> <MdArrowRight />
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <img
                  className="h-5 w-5"
                  src={S3_BASE_URL + cmsClientDetail?.logo}
                />
                <span className="self-center text-sm">
                  by Center for Urban Agriculture and Innovation
                </span>
              </div>
              <span className="text-xs">39:49 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWhatWeDo;
