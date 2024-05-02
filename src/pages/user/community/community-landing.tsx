import React, { useEffect, useRef, useState } from "react";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";
import FarmCard from "../../../components/user/community/farm-card/farm-card";
import { Card } from "@components/ui/card";
import ReportIllustration from "@icons/community/ReportIllustration";
import GalleryIllustration from "@icons/community/GalleryIllustration";
import RequestIllustration from "@icons/community/RequestIllustration";
import AnalyticsIllustration from "@icons/community/AnalyticsIllustration";
import { FaWpforms } from "react-icons/fa6";
import {
  MdOutlineForum,
  MdOutlineGroup,
  MdOutlineReport,
  MdOutlineTask,
  MdOutlineUpload
} from "react-icons/md";
import { RiDropboxLine, RiSeedlingLine } from "react-icons/ri";
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
import ToolIllustration from "@icons/community/ToolIllustration";
import { formatDistrict } from "../../../components/lib/utils";
import JoinIllustration from "@icons/community/JoinIllustration";
import TaskIllustration from "@icons/community/TaskIllustration";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";
import ChatIllustration from "@icons/community/ChatIllustration";
import { IoChatboxOutline } from "react-icons/io5";

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
        "Maari kang makapunta sa iyong Community sa pamamagitan ng pag click ng Community  My Community. Sa pagpunta dito ay magkakaroon ka ng access sa mga mahahalagang detalye ng iyong komunidad katulad ng Farm Members, Crops, Analytics and Farm Gallery."
    },
    {
      question: "Paano ako makakasali sa isang Community?",
      answer:
        "Sa pagsali sa isang komunidad, maaari kang makapunta sa Community  Explore. Sa Explore section, ikaw ay makakahanap ng isang komunidad kung saan mo gustong sumali. Subalit, kinakailangan mo magkaroon ng isang account sa Agrihub upang makasali sa isang community."
    },
    {
      question: "Sino ang maaring matanggap bilang isang partnered farm?",
      answer:
        "Ang community farm ay nire-require kang maging parte ng Joy of Urban Farming community na kailangan ng mahahalagang dokumento upang makasali ang iyong community sa Agrihub. Para mairehistro ang iyong farm, ang may-ari ng lupa ay dapat na mag-apply para sa idle land tax exemption sa pamamagitan ng email application, letter duly accomplished application for waiver of idle land tax for food security, mga litrato ng iyong lupa, at isang kopya ng kahit anong dokumento: latest real property tax official receipt/tax bill, tax declaration, or land title."
    },
    {
      question:
        "Paano ko mairerehistro ang aking urban farm community sa Agrihub?",
      answer:
        "Maari mong mairehistro ang iyong farm sa pamamagitan ng pagpunta sa Community  Explore  Register Farm. Mula dito, ikaw ay kinakailangan mag fill-up ng isang form na humihingi ng iyong mga detalye tulad ng: Farm Name, Farm Size, District, Street, Barangay, Farm Ownership, Farm Type, Valid ID Type, at Farm Photo upang mairehistro ang iyong farm o community. Pagkatapos mong mafill-upan ang form, kailangan mong maghintay ng hindi hihigit sa isang linggo upang mareview ng mga Admin ang iyong application"
    }
  ];
  const navigate = useNavigate();
  const navigateExplore = () => {
    navigate("/community/explore");
  };

  const { data: aboutDeatils } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

  return (
    <OutletContainer>
      <div className="mx-4">
        <div className="py-10">
          {/* Header */}
          <div className="flex flex-wrap sm:ml-10 gap-x-3 justify-between">
            <h6 className="font-poppins-medium tracking-tight">
              Mga farm sa AgriHub
            </h6>
          </div>

          {/* Content */}
          <div className="flex">
            <div className="w-full max-w-[25rem] sm:ml-10 mt-20">
              <h2 className="font-poppins-semibold tracking-tight leading-[2.3rem]">
                Sumali na sa farm na iyong kinabibilangan
              </h2>

              <p className="mt-5">
                Ang pagrehistro ng iyong farm ay makakatulong upang mas maging
                mas madali ang pag-submit ng iyong farm report. Ikaw rin ay
                makakahanap ng solusyon sa mga problema ng iyong farm, tumanggap
                ng mga resource materials na makakapagbigay sa pangangalaga ng
                iyong mga tanim gamit ang aming prescriptive analytics
              </p>

              <div className="mt-10">
                <Link to="explore">
                  <Button>Sumali sa farm</Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block mx-auto">
              <CommunityIllustration />
            </div>
          </div>
        </div>

        <p>
          Mga farms na{" "}
          {userData ? "kasali na sa iyong distrito" : "kasali na sa AgriHub"}:
        </p>

        <div className="grid grid-cols-6 gap-2  mt-10">
          {data?.farms
            ?.filter(farm => farm.id !== userData?.farm_id)
            .map((farm, i) => <FarmCard farm={farm} key={i} />)}
        </div>
        <Button
          className="w-full mb-16 mt-4"
          variant="outline"
          onClick={navigateExplore}
        >
          See more
        </Button>
      </div>
      <div className="bottom-8 sm:left-auto left-[46%] right-auto sm:right-8 fixed">
        <ScrollToSectionButton targetRef={sectionRef} />
      </div>
      {/* header */}
      <div className="max-w-xl mx-auto my-8 text-center">
        <img
          src={S3_BASE_URL + aboutDeatils?.agrihub_user_logo}
          width={60}
          className="mx-auto"
        />
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Ang mga benepisyo sa pagsali sa AgriHub
        </h3>
        <p className="text-gray-600 mt-3">
          Ikaw ay maaring maging parte ng isang lumalagong komunidad ukol sa
          urban farming kung saan ay makakapag-ambag ka ng iyong parte bilang
          isang miyembro. Ang mga features na ito ay makakatulong sayo upang
          magkaroon ng access sa mga serbisyo ng Agrihub.
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
                  nang mabuti para iyong farm.
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
                  Pagbutihin ang iyong pagtatanim gamit ang aming prescriptive
                  analytics para makakuha ng makabuluhang ideya at rekomendasyon
                  ukol sa mga gawi sa pagsasaka
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
                  Humingi <span className="text-green-600"> ng punla</span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ang farmers ay maaring magpadala ng request para makuha ang
                  mga kinakailangan na punla.
                </p>
                <hr className="my-4" />
                {/* description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Pagtibayin at palakasin ang produksyon ng iyong urban farm sa
                  pamamagitan ng pagsusumite ng request tungkol sa mga kailangan
                  ninyong mga punla na naka-ayon sa uri ng farm na mayroon ka.
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
                    ng larawan ng iyong farm at ani
                  </span>
                </h3>
                {/* subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ipakita ang mga highlight ng iyong farm sa pamamagitan ng
                  litrato
                </p>
                <hr className="my-4" />
                {/* description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Manghikayat ng ibang mga nais maging farmer at ibang komunidad
                  sa pamamagitan ng pag-upload ng mga litrato ng iyong urban
                  farm at mga ani sa inyong community gallery
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
                  Ipaalam{" "}
                  <span className="text-green-600">
                    ang mga problema ng iyong farm
                  </span>
                </h3>
                {/* Subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Makakuha ng agarang solusyon sa mga pangkaraniwang problema ng
                  iyong farm
                </p>
                <hr className="my-4" />
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Makatanggap ng mga suhestyon at solusyon sa mga pangkaraniwang
                  problema sa isang farm sa pamamagitan ng pagsusumite ng isang
                  report ukol sa iyong kasalukuyang problema.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <SolutionIllustration />
              </div>
            </div>
          </section>

          {/* Tool reqeust  */}
          <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16">
            <div className="relative z-10 gap-5 items-center sm:flex justify-between">
              <div className="flex-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                {/* Icons */}
                <RiDropboxLine className="h-16 w-16 p-1 text-green-600" />
                {/* Header */}
                <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                  Humingi <span className="text-green-600">ng kagamitan</span>
                </h3>
                {/* Subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ang isang community o farm ay maaring magpadala ng request
                  upang makakuha ng kinakailangang materyales para sa
                  pagpapayabong ng isang urban farm.
                </p>
                <hr className="my-4" />
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Punan ang pangangailangan ng iyong urban farm sa pamamagitan
                  ng pag-send ng request sa Agrihub upang humingi ng mga
                  materyales at kagamitan na maaring makatulong sa
                  pang-araw-araw na gawain sa iyong Urban Farm.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <ToolIllustration />
              </div>
            </div>
          </section>
          {/* Assigning of Task  */}
          <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16">
            <div className="relative z-10 gap-5 items-center sm:flex justify-between">
              <div className="flex-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                {/* Icons */}
                <MdOutlineTask className="h-16 w-16 p-1 text-green-600" />
                {/* Header */}
                <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                  Magtalaga{" "}
                  <span className="text-green-600">ng mga gawain</span>
                </h3>
                {/* Subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Ang isang farm ay kinabibilangan o binubuo ng mga farmer na
                  may kanya-kanyang gawain na nakabase sa pangangailangan ng
                  isang urban farm.
                </p>
                <hr className="my-4" />
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Magtalaga ng mga gawain sa mga farmer sa iyong urban farm
                  upang mapanatili ang organisadong paraan sa paglista ng mga
                  dapat isaalang-alang na mahahalagang tungkulin ng bawat
                  miyembro.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <TaskIllustration />
              </div>
            </div>
          </section>
          {/* Joining of farm */}
          <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16">
            <div className="relative z-10 gap-5 items-center sm:flex justify-between">
              <div className="flex-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                {/* Icons */}
                <MdOutlineGroup className="h-16 w-16 p-1 text-green-600" />
                {/* Header */}
                <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                  Palawakin{" "}
                  <span className="text-green-600">ang iyong komunidad</span>
                </h3>
                {/* Subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Para sa patuloy na pagpapalawig ng iba't ibang Urban Farm sa
                  Lungsod Quezon. Ang Agrihub ay makakatulong upang makatanggap
                  ng iba't ibang miyembro ang iyong Urban Farm na may interes na
                  makilahok.
                </p>
                <hr className="my-4" />
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Makatanggap ng mga request mula sa mga nais sumali sa iyong
                  Urban Farm o mag-imbita ng mga Urban Farmers na maaring
                  makatulong mapalawig at mapabuti ang pag-aalaga sa mga pananim
                  ng iyong Urban Farm.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <JoinIllustration />
              </div>
            </div>
          </section>
          {/* Chat */}
          <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-16">
            <div className="relative z-10 gap-5 items-center sm:flex justify-between">
              <div className="flex-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                {/* Icons */}
                <IoChatboxOutline className="h-16 w-16 p-1 text-green-600" />
                {/* Header */}
                <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                  Magsimula ng{" "}
                  <span className="text-green-600">Komunikasyon</span>
                </h3>
                {/* Subheader */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Para sa patuloy na pagpapalawig ng iba't ibang Urban Farm sa
                  Lungsod Quezon. Ang Agrihub ay makakatulong upang makatanggap
                  ng iba't ibang miyembro ang iyong Urban Farm na may interes na
                  makilahok.
                </p>
                <hr className="my-4" />
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mt-3">
                  Makatanggap ng mga request mula sa mga nais sumali sa iyong
                  Urban Farm o mag-imbita ng mga Urban Farmers na maaring
                  makatulong mapalawig at mapabuti ang pag-aalaga sa mga pananim
                  ng iyong Urban Farm.
                </p>
              </div>

              <div className="flex justify-center mt-5 sm:w-1/2 mx-auto lg:mt-0">
                <ChatIllustration />
              </div>
            </div>
          </section>
        </Card>

        {/* faqs */}
        <div className="p-16">
          <div className="max-w-xl mx-auto my-8 text-center">
            <MdOutlineForum className="h-16 w-16 p-1 text-green-600 mx-auto" />
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Mga pangkaraniwang katanungan sa Agrihub
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
