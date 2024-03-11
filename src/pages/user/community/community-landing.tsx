import React from "react";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link } from "react-router-dom";
import CommunityIllustration from "@assets/images/community.png";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";
import FarmCard from "../../../components/user/community/farm-card/farm-card";
import { Card } from "@components/ui/card";
import ReportIllustration from "@icons/community/ReportIllustration";
import GalleryIllustration from "@icons/community/GalleryIllustration";
import RequestIllustration from "@icons/community/RequestIllustration";
import AnalyticsIllustration from "@icons/community/AnalyticsIllustration";
import logo from "../../../icons/main-logo.svg";
import { FaWpforms } from "react-icons/fa6";
import {
  MdOutlineForum,
  MdOutlineReport,
  MdOutlineUpload
} from "react-icons/md";
import { RiSeedlingLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";
import SolutionIllustration from "@icons/community/SolutionIllustration";

const CommunityLanding = () => {
  const { data: userData } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "3"
  });

  const faqs = [
    {
      question: "How can I find my Community?",
      answer:
        "You can navigate to your Community by clicking > Community > My Community. This will allow you to access your community details such as Farm Members, Crops, Analytics and Farm Gallery."
    },
    {
      question: "How can I join a Community?",
      answer:
        "In joining a community, you can go to the Community > Explore. In the Explore section, you can find a community where you desire to join. However, we require you to have an account in Agrihub in order to join a community."
    },
    {
      question: "Who can be accepted as a community farm?",
      answer:
        "A community farm requires to be a part of Joy of Urban Farming community with proper required documents in order to qualify as a community in Agrihub. In order to register your farm, land owners must apply for idle land tax exemption through email application, letter duly accomplished application for waiver of idle land tax for food security, latest photos of land, and at least one copy of any of the following documents: latest real property tax official receipt/ tax bill, tax declaration, or land title."
    },
    {
      question: "How can I register my urban farm community in the Agrihub?",
      answer:
        "You can register your farm by navigating to Community > Explore > Register Farm. From there, you can fill up the form with the necessary details such as Farm Name, Farm Size, District, Street, Barangay, Farm Ownership, Farm Type, Valid ID Type, and Farm Photo to register your community. After successfully filling up the form, you need to wait for atleast 7 days for the Admins to review your application."
    }
  ];

  return (
    <OutletContainer className="min-h-screen">
      <div className="py-10">
        {/* Header */}
        <div className="flex flex-wrap gap-x-3 justify-between">
          <h6 className="font-poppins-medium tracking-tight">
            Farm Community on Agrihub
          </h6>
        </div>

        {/* Content */}
        <div className="flex">
          <div className="w-full max-w-[25rem] mt-20">
            <h2 className="font-poppins-semibold tracking-tight leading-[2.3rem]">
              Join the community where you belong
            </h2>

            <p className="mt-5">
              Community helps you find solutions to your farm problem, send
              reports, and receive resource materials that help you make an
              informed decision making using our prescriptive analytics.
            </p>

            <div className="mt-10">
              <Link to="explore">
                <Button>Discover</Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={CommunityIllustration} />
          </div>
        </div>
      </div>

      <p>Farms who already joined Communities:</p>

      <div className="grid grid-cols-6 gap-2 mb-20 mt-10">
        {data?.farms
          ?.filter(farm => farm.id !== userData?.farm_id)
          .map((farm, i) => <FarmCard farm={farm} key={i} />)}
      </div>

      {/* header */}
      <div className="max-w-xl mx-auto my-8 text-center">
        <img src={logo as unknown as string} width={60} className="mx-auto" />
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Community works for you
        </h3>
        <p className="text-gray-600 mt-3">
          In joining a community, you can be a part of a growing urban farming
          community where you can do your part as a member. These features will
          help you access the services of the Agrihub:
        </p>
      </div>

      {/* features */}
      <Card className="py-8 px-4">
        {/* farm reports */}
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16  ">
          <div className="relative z-10 gap-5 items-center sm:flex justify-between">
            <div className="flex-1  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              {/* icons */}
              <FaWpforms className="h-16 w-16 p-1 text-green-600" />
              {/* header */}
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Send <span className="text-green-600">farm reports</span>
              </h3>
              {/* subheader */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Keep track of essential farming records.
              </p>
              <hr className="my-4" />
              {/* description */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Creating a farm report enables you to evaluate your Urban Farm
                records to help with the farming plan and for future references.
              </p>
            </div>

            <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
              <ReportIllustration />
            </div>
          </div>
        </section>

        {/* analytics */}
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16  ">
          <div className="relative z-10 gap-5 items-center sm:flex justify-between">
            <div className="flex-1  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              {/* icons */}
              <TbReportAnalytics className="h-16 w-16 p-1 text-green-600" />
              {/* header */}
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Use{" "}
                <span className="text-green-600">prescriptive analysis</span>
              </h3>
              {/* subheader */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Analyze historical farming data with advanced analytical
                approach.
              </p>
              <hr className="my-4" />
              {/* description */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Optimize your farm's yields with our AI-Powered prescriptive
                analytics to gain access with actionable insights and farming
                recommendations.
              </p>
            </div>

            <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
              <AnalyticsIllustration />
            </div>
          </div>
        </section>

        {/* request  */}
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16  ">
          <div className="relative z-10 gap-5 items-center sm:flex justify-between">
            <div className="flex-1  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              {/* icons */}
              <RiSeedlingLine className="h-16 w-16 p-1 text-green-600" />
              {/* header */}
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Request <span className="text-green-600">seedlings</span>
              </h3>
              {/* subheader */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Communities can send a request to get needed seedlings.
              </p>
              <hr className="my-4" />
              {/* description */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Enhance your urban farm's production by requesting seedlings
                that aligns with your daily farm needs and environmental
                conditions.
              </p>
            </div>

            <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
              <RequestIllustration />
            </div>
          </div>
        </section>

        {/* gallery */}
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16  ">
          <div className="relative z-10 gap-5 items-center sm:flex justify-between">
            <div className="flex-1  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              {/* icons */}
              <MdOutlineUpload className="h-16 w-16 p-1 text-green-600" />
              {/* header */}
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Upload{" "}
                <span className="text-green-600">farm and harvest images</span>
              </h3>
              {/* subheader */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Showcase the highlights of your farm with photos.
              </p>
              <hr className="my-4" />
              {/* description */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Encourage other farmers and communities by uploading images of
                your urban farm and yields in your community gallery.
              </p>
            </div>

            <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
              <GalleryIllustration />
            </div>
          </div>
        </section>

        {/* farm problems */}
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16">
          <div className="relative z-10 gap-5 items-center sm:flex justify-between">
            <div className="flex-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              {/* Icons */}
              <MdOutlineReport className="h-16 w-16 p-1 text-green-600" />
              {/* Header */}
              <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                Report <span className="text-green-600">farm problems</span>
              </h3>
              {/* Subheader */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Easily get solutions to common farm problems.
              </p>
              <hr className="my-4" />
              {/* Description */}
              <p className="text-gray-500 leading-relaxed mt-3">
                Easily find solutions to common farm problems, and you can also
                report new problems for the admin to review.
              </p>
            </div>

            <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
              <SolutionIllustration />
            </div>
          </div>
        </section>
      </Card>

      {/* faqs */}
      <div className="py-16">
        <div className="max-w-xl mx-auto my-8 text-center">
          <MdOutlineForum className="h-16 w-16 p-1 text-green-600 mx-auto" />
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            You have questions. We have answers.
          </h3>
          <p className="text-gray-600 mt-3">
            Explore content from our{" "}
            <Link
              to="/helps"
              className="text-green-700 font-bold hover:underline"
            >
              Help Center
            </Link>
          </p>
        </div>

        {/* FAQs accordion */}
        <div className="flex justify-center my-12">
          <Accordion type="multiple" className="max-w-2xl w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </OutletContainer>
  );
};

export default CommunityLanding;
