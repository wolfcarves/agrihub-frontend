import React, { useEffect, useRef, useState } from "react";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link } from "react-router-dom";
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
import CommunityIllustration from "@icons/community/CommunityIllustration";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ScrollToSectionButton: React.FC<{
  targetRef: React.RefObject<HTMLDivElement>;
}> = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(!entry.isIntersecting);
      });
    });

    observer.observe(targetRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="secondary"
          className="z-50 text-xs p-2 hover:text-primary text-primary flex-col h-auto shadow-xl"
          onClick={scrollToSection}
        >
          <FiChevronDown size={24} />
        </Button>
      )}
    </>
  );
};

const ScrollToTopButton: React.FC<{
  targetRef: React.RefObject<HTMLDivElement>;
}> = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );

    observer.observe(targetRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="secondary"
          className="z-50 text-xs p-2 hover:text-primary text-primary flex-col h-auto fixed bottom-8 right-8"
          onClick={scrollToTop}
        >
          <FiChevronUp size={24} />
        </Button>
      )}
    </>
  );
};

const CommunityLanding = () => {
  const { data: userData } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "3"
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setMarginTop(-80);
        } else {
          setMarginTop(0);
        }
      });
    });

    observer.observe(sectionRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {
      question: "Paano ko mahahanap ang aking farm?",
      answer:
        "Maari kang makapunta sa iyong Community sa pamamagitan ng pag click ng  Community  My Community.Sa pagpunta dito ay magkakaroon ka ng access sa mga mahahalagang detalye ng iyong komunidad katulad ng Farm Members, Crops, Analytics and Farm Gallery."
    },
    {
      question: "Paano ako makakasali sa isang Community?",
      answer:
        "Sa pagsali sa isang komunidad, maaari kang makapunta sa Community  Explore. Sa Explore section, ikaw ay makakahanap ng isang komunidad kung saan mo gustong sumali. Ngunit, kailangan mo magkaroon ng isang account sa Agrihub upang makasali sa community."
    },
    {
      question: "Sino ang maaring matanggap bilang isang partnered farm?",
      answer:
        "Ang community farm ay nire-require kang maging parte ng Joy of Urban Farming community na kailangan ng mahahalagang dokumento para makasali ang iyong community sa Agrihub. Para mairehistro ang iyong farm, ang may-ari ng lupa ay dapat na mag-apply para sa idle land tax exemption sa pamamagitan ng email application, letter duly accomplished application for waiver of idle land tax for food security, mga litrato ngiyong lupa, at isang kopya ng kahit anong dokumento: latest real property tax official receipt/tax bill, tax declaration, or land title."
    },
    {
      question:
        "Paano ko mairerehistro ang aking urban farm community sa Agrihub?",
      answer:
        "YMaari mong mairehistro ang iyong farm sa pamamagitan ng pagpunta sa Community  Explore  Register Farm. Mula dito, ikaw ay kinakailangan mag fill-up ng isang form na humihingi ng iyong mga detalye tulad ng: Farm Name, Farm Size, District, Street, Barangay, Farm Ownership, Farm Type, Valid ID Type, at Farm Photo upang mairehistro ang iyong komunidad. Pagktapos mong mafill-upan ang form, kailangan mong maghintay ng hindi hihigit sa isang linggo upang mareview ng mga Admin ang iyong application"
    }
  ];

  return (
    <OutletContainer className="min-h-screen">
      <div className="py-10">
        {/* Header */}
        <div className="flex flex-wrap sm:ml-10 gap-x-3 justify-between">
          <h6 className="font-poppins-medium tracking-tight">
            Farm Community on Agrihub
          </h6>
        </div>

        {/* Content */}
        <div className="flex">
          <div className="w-full max-w-[25rem] sm:ml-10 mt-20">
            <h2 className="font-poppins-semibold tracking-tight leading-[2.3rem]">
              Sumali na sa farm kung saan ka nabibilang
            </h2>

            <p className="mt-5">
              Ang komunidad ay makakatulong sa iyo upang makahanap ng solusyon
              sa mga problema ng iyong farm, pag-send ng reports, at pagtanggap
              ng mga resource materials na makakapagbigay sa iyo ng makabuluhang
              desisyon gamit ang aming prescriptive analytics
            </p>

            <div className="mt-10">
              <Link to="explore">
                <Button>Alamin</Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block mx-auto">
            <CommunityIllustration />
          </div>
        </div>
      </div>

      <p>Mga Farms na nakasali na sa aming komunidad:</p>

      <div className="grid grid-cols-6 gap-2 mb-20 mt-10">
        {data?.farms
          ?.filter(farm => farm.id !== userData?.farm_id)
          .map((farm, i) => <FarmCard farm={farm} key={i} />)}
      </div>
      <div className="bottom-8 sm:left-auto left-[46%] right-auto sm:right-8 fixed">
        <ScrollToSectionButton targetRef={sectionRef} />
      </div>
      {/* header */}
      <div className="max-w-xl mx-auto my-8 text-center">
        <img src={logo as unknown as string} width={60} className="mx-auto" />
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Ang AgriHub ay makakatulong sa iyo
        </h3>
        <p className="text-gray-600 mt-3">
          Sa pagsali sa isang komunidad, ikaw ay maaring maging parte ng isang
          lumalagong komunidad ukol sa urban farming kung saan ay
          makakapag-ambag ka ng iyong parte bilang isang miyembro. Ang mga
          features na ito ay makakatulong sayo upang ma-access ang mga serbisyo
          ng Agrihub.
        </p>
      </div>

      <div ref={sectionRef} style={{ marginTop }}>
        {/* features */}
        <Card className="py-8 px-4 mb-16">
          {/* farm reports */}
          <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16  ">
            <div className="relative z-10 gap-5 items-center sm:flex justify-between">
              <div className="flex-1  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                {/* icons */}
                <FaWpforms className="h-16 w-16 p-1 text-green-600" />
                {/* header */}
                <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                  Mag send{" "}
                  <span className="text-green-600"> ng farm reports</span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Maging updated sa mga mahahalagang record ng iyong farm.
                </p>
                <hr className="my-4" />
                {/* description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ang paggawa ng isang farm report ay makakatulong sa iyo upang
                  masuri mo ang iyong mga Urban Farm records upang makapag-plano
                  ng mabuti at para sa kasulukuyang pagganap.
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
                  Kumuha <span className="text-green-600">ng sagot</span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Suriin ang kasaysayan ng iyong farming data gamit ang aming
                  progresibong analitikal na approach.
                </p>
                <hr className="my-4" />
                {/* description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Pagandahin ang iyong ani gamit ang aming AIPowered
                  prescriptive analytics para makakuha ng access na may
                  makabuluhang ideya para sa rekomendasyon sa mga gawi sa
                  pagsasaka
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
                  Mag request{" "}
                  <span className="text-green-600"> ng seedlings</span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ang komunidad ay maaring magbigay ng request para makuha ang
                  mga kailangan na punla
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
                  Mag lagay{" "}
                  <span className="text-green-600">
                    ng larawan ng farm at ani
                  </span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Showcase the highlights of your farm with photos.
                </p>
                <hr className="my-4" />
                {/* description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Tulungan ang ibang mga farmer at komunidad sa pamamagitan ng
                  pag-upload ng mga litrato ng iyong urban farm at mga ani sa
                  iyong community gallery
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
                  Easily find solutions to common farm problems, and you can
                  also report new problems for the admin to review.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <SolutionIllustration />
              </div>
            </div>
          </section>
        </Card>

        {/* faqs */}
        <div className="p-16">
          <div className="max-w-xl mx-auto my-8 text-center">
            <MdOutlineForum className="h-16 w-16 p-1 text-green-600 mx-auto" />
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Tignan ang mga karaniwang tanong.
            </h3>
            <p className="text-gray-600 mt-3">
              Para sa iba pang katanungan pumunta sa aming{" "}
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
      </div>
      <div ref={bottomRef}></div>
      <ScrollToTopButton targetRef={bottomRef} />
    </OutletContainer>
  );
};

export default CommunityLanding;
