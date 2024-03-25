import useGetClientDetails from "@hooks/api/get/useGetClientDetails";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";

const About = () => {
  const { data: cmsClientDetail } = useGetClientDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const sliderImages = [
    "https://i.imgur.com/lD8gT33.png",
    "https://i.imgur.com/WNxogAW.png",
    "https://i.imgur.com/JaaFkfz.png"
  ];

  const contactMethods = [
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: `${cmsClientDetail?.email}`
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: `${cmsClientDetail?.contact_number}`
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
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: `${cmsClientDetail?.address}`
    }
  ];

  const team = cmsClientDetail?.members;

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
        <img
          className="w-full mt-0"
          src="https://i.imgur.com/5LuXO93.png"
        ></img>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16 ">
        <p className="text-sm lg:text-lg px-8 sm:px-44 lg:px-44 leading-relaxed py-3">
          Ang Quezon City University Center for Urban Agriculture and Innovation
          ay isang inisyatibo na nagpatibay sa pakikipag-kaisa sa Department of
          Agriculture Agriculture Training Institute DAATI at ang Sustainable
          Development Affairs Unity SDAU ng lokal na pamahalaan. Ang learning
          hub ay naglalayon na makagawa ng iba't ibang modelo ng urban farms,
          harapin ang mga hamon na hinaharap ng mga urban farmers, at
          pagpapalakas ng kasikatan ng kurikulum ng urban agriculture ng Quezon
          City University
        </p>
        <p className="text-sm md:text-base lg:text-lg px-8 sm:px-44 lg:px-44 leading-relaxed py-3">
          Ang sentro ay nakatanggap ng financial assistance mula sa DAATI upang
          makagawa ng isang dynamic learning environment sa QCU campus. Ang mga
          natatanging inobasyon ay naglalagay ng bee farm, na sinusuportahan ng
          QCU Cooperative, kasama ng mga staff na sanay sa beekeeping na galing
          sa Agriculture Producers Cooperative.
        </p>
        <p className="text-sm md:text-base lg:text-lg px-8 sm:px-44 lg:px-44 leading-relaxed py-3">
          Nakasunod ang pokus ng lungsod sa pagpapanatili, ang Center for Urban
          Agriculture and Innovation ay may kritikal na ganap sa pagpapatibay at
          pagpapalawig ng urban farming programs sa Lungsod Quezon. Si Mayor Joy
          Belmonte ang naging susi sa paggawa ng isang matalino at konkretong
          lungsod, na sinasamahan ng mga estudyante at stakeholders sa
          kasulukuyan.
        </p>
        <p className="text-sm md:text-base lg:text-lg px-8 sm:px-44 lg:px-44 leading-relaxed py-3">
          Pinapamunuan ng QCU President Dr. Theresita Atienza, and center ay
          nagpapalawig ng epekto nito sa mga programa at proyekto na nakabatay
          sa mga misyon ng Lungsod Quezon. Ito ay isang masiglang komunidad
          tungo sa matalinong kasalukuyan at makabagong landscape ng isang urban
          agriculture sa Lungsod Quezon.
        </p>
      </div>
      <div>
        {/* ... Image ... */}

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
            Aming Kwento
          </h4>
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true
            }}
          >
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <img src={sliderImages[2]} className="w-auto mt-3" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/*Mission*/}
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-xl mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
          Mission & Vision
        </h4>
        <div className="flex gap-4 mx-4 sm:flex-nowrap flex-wrap">
          <div className="flex justify-center items-center sm:p-10 p-5 mx-auto">
            <h2 className="font-bold text-5xl italic">M</h2>
          </div>
          <div className="flex items-center">
            <p className="text-md sm:text-lg sm:text-left text-center">
              {cmsClientDetail?.mission}
            </p>
          </div>
        </div>
      </div>
      {/*Vission*/}
      <div className="flex gap-4 sm:flex-nowrap flex-wrap max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center sm:p-10 p-5 mx-auto">
          <h2 className="font-bold text-5xl italic">V</h2>
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
            className="flex flex-wrap sm:flex-nowrap items-center mx-4 mb-4"
            key={ids}
          >
            <div className="w-full sm:w-1/3 flex items-center">
              <img
                className="w-full"
                src={S3_BASE_URL + partners.logo}
                alt={cmsClientDetail.name}
              />
            </div>
            <div className="w-full sm:w-2/3 flex h-full items-center">
              <p className="text-sm sm:text-lg pl-0 sm:pl-4">
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
              Nakabatay sa commitment ng Lungsod Quezon sa pagpapanatili, ang
              aming center ay may mahalagangg pagganap sa pagpapatibay at
              pagpapalawig ng urban farming programs ng Lungsod Quezon. Si Mayor
              Joy Belmonte ay isa sa may mahalagang pagganap sa paggawa ng
              matalino at maunlad ng lungsod, kasama ang mga estudyante at
              stakeholders sa proseso nito
            </p>
          </div>
          <div className="sm:w-1/2 relative flex items-center justify-center h-full">
            <img
              className=" w-3/4 h-auto"
              src="https://i.imgur.com/nL9Csob.png"
              alt="Your Image"
            />
          </div>
        </div>
      </div>
      {/* President Message */}
      <div className="mt-8 sm:mt-12 lg:mt-28 max-w-screen-xl mx-auto">
        <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
          President Message
        </h4>
        <div className="flex">
          <div className="w-1/3 sm:w-1/3 flex ml-4 m:ml-12 lg:ml-32 items-start mt-8 sm:mt-12 lg:mt-12">
            <img
              className="w-full sm:w-3/4 h-auto"
              src="https://i.imgur.com/MDd9HbW.png"
              alt="Your Image"
            />
          </div>

          <div className="w-2/3">
            <p className="text-sm md:text-base lg:text-lg px-5 sm:px-6 lg:px-44   ml-4 m:ml-12 lg:ml-0 mt-2 sm:mt-4 lg:mt-36 leading-relaxed py-2 ">
              Pinalawig ang commitment ng Quezon City University sa
              pagpapanatili ng kapaligiran gamit ang aming campus, kami ay
              naglalayon na palawigin pa ito gamit ang mga programs at proyekto
              na nakasentro sa mga misyon ng gobyerno ng Lungsod Quezon
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
                Ipaalam sa amin kung paano pa kami makakatulong sa iyo
              </p>
              <p>
                Andito kami para makatulong at sumagot sa iyong mga katanungan.
                Kami ay umaasang makatanggap ng mensahe mula sa iyo! Mangyari
                lamang na magfill-out ng aming form o gamitin ang aming contact
                sa ibaba:
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {contactMethods.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form
                target="_blank"
                action="https://formsubmit.co/be07a8e90d267dedd8bf6a354cb4d0e7"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    name="FullName"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    required
                    name="Message"
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  ></textarea>
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
