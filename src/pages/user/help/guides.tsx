import React, { useState } from "react";
import { FaPlay, FaRegImage } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import extractYouTubeVideoId from "../learning/util/extractYtUrl";
import { convertToEmbedLink } from "@components/lib/utils";

interface Guide {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const guides: Guide[] = [
  {
    time: "00:01",
    title: "Ano ang AgriHub?",
    description:
      "Samahan natin si Kuya Wil upang alamin kung paano nga ba nagsimula ang Agrihub maging ang mga mahahalagang layunin at misyon na makatutulong sa mga urban farmers ng Lungsod Quezon.",
    icon: <IoPersonOutline size={64} />
  },
  {
    time: "01:39",
    title: "Ano ang mga nilalaman ng Agrihub",
    description:
      "Tuklasin ang mga mahahalagang nilalaman ng Agrihub na una ninyong makikita matapos bisitahin ang website. Sa parteng ito ay ipapaliwanag ni Kuya Wil kung ano ang nagagawa ng mga ito.",
    icon: <TfiWrite size={64} />
  },
  {
    time: "03:32",
    title: "Paano mag-register ng isang farm?",
    description:
      "Ang pagkakaroon ng isang urban farming community ay isa sa pinakamahalagang misyon ng Agrihub. Alamin kung ano ang mga kinakailangang impormasyon upang mairehistro sa Agrihub ang iyong komunidad.",
    icon: <PiPlant size={64} />
  },
  {
    time: "05:18",
    title: "Ano ang magagawa ng isang Farm Head sa Agrihub?",
    description:
      "Ang bawat komunidad ay may kanya kanyang Farm Head na namumuno sa pagpapalago ng urban farm at maging ang pakikibahagi sa Center for Urban Agriculture sa Quezon City. Alamin ang mga pribilehiyo ng isang Farm Head sa Agrihub.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "09:41",
    title:
      "Ano ang mga bagay na maaring gawin ng isang Farm Member sa Agrihub?",
    description:
      "Ang bawat miyembro ng isang urban farm ay bumubuo sa pagtayo ng isang komunidad. Ipapaliwanag ni Kuya Wil ang mga maaring makita ng isang Farm Member sa Agrihub.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "13:47",
    title: "Ano ang mga bagay na maaring gawin ng isang Admin sa Agrihub?",
    description:
      "Ang pagiging admin sa Agrihub ay ang pinakamahalagang gampanin upang pamahalaan nang maayos ang website. Halina't tuklasin kung paano makakatulong ang Agrihub sa Center for Urban Agriculture.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "17:59",
    title: "Paano naglalagay ang isang Admin ng mga pananim sa Agrihub?",
    description:
      "Mahalagang malaman ang bawat punla o pananim na nasa iba't ibang uri ng urban farm sa Quezon City. Ito ay makakatulong upang mas maging organisado at maipamahagi ang mahahalagang kaalaman ukol sa isang uri ng pananim.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "26:01",
    title:
      "Ano ang iyong unang makikita sa pagbisita sa Agrihub Forum kung ikaw ay walang account?",
    description:
      "Ang Agrihub Forum ay isa sa pinakamalaking parte ng Agrihub kung saan ito ay nakikita ng kahit na sinong bumisita sa website. Mahalagang malaman kung ano ano ang iyong magagawa sa isang Forum kung ikaw ay hindi pa nakakagawa ng isang account.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "27:38",
    title:
      "Ano ang iyong unang makikita sa pagbisita sa Agrihub Forum kung ikaw ay walang account?",
    description:
      "Upang makibahagi sa paggamit ng Agrihub Forum ay mahalagang magkaroon ng isang registered account. Ipapaliwanag ni Kuya Wil kung paano gamitin ang Agrihub Forum.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "30:00",
    title: "Paano mapapanatili ng isang Admin ang kaayusan sa Agrihub Forum?",
    description:
      "Ang bawat katanungan sa Agrihub Forum ay mahalagang mapamahalaan ng isang Admin upang mapanatili ang kaayusan at maiwasan ang anumang hindi kaaya-ayang tanong sa Agrihub Forum.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "32:03",
    title:
      "Ano-ano pa ang higit na magagawa ng isang rehistradong account sa Agrihub?",
    description:
      "Ang bawat account na nakarehistro sa Agrihub ay may kanya kanyang pagkakakilanlan upang matiyak ang seguridad ng lahat ng miyembro sa paggamit ng mga features ng Agrihub.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "33:43",
    title: "Ano ang makikita ng isang Admin sa Agrihub Admin Panel?",
    description:
      "Ipapakita ni Kuya Wil ang mga mahahalagang koleksyon ng mga datos, bilang ng mga miyembro at kasalukuyang estado ng bawat farm sa Agrihub na makikita sa Admin Panel Overview.",
    icon: <FaRegImage size={64} />
  },
  {
    time: "37:40",
    title:
      "Paano makikita ng Center for Urban Agriculture kung ano ang mga nagawa ng mga Assistant Admin sa Agrihub?",
    description:
      "Ang pagkakaroon ng isang Admin Log ay mahalaga upang makita nang maayos ang mga pagbabago na nagawa sa Agrihub.",
    icon: <FaRegImage size={64} />
  }
];

const UserGuides = () => {
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const guidelineVid = "https://youtu.be/58wsYvsfGJQ?si=pOJtaykgWuEGjzx7";
  const [videoSrc, setVideoSrc] = useState<string>(guidelineVid);
  // nakukuha na seconds pero yung link aralin pa
  const handleTimeClick = (time: string) => {
    setVideoSrc(`https://youtu.be/tBxpyTiJWNw&t=${time}s`);
  };

  return (
    <>
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
      <div className="container py-10">
        <h2 className="font-poppins-semibold">User Guides</h2>
        <div className="w-full flex justify-center">
          <div className="relative w-full sm:w-1/2 aspect-video rounded-md border">
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
              <div className="m-auto rounded-full w-max h-max border p-5">
                <FaPlay className="text-background translate-x-1" size={36} />
              </div>
            </button>
          </div>
        </div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col p-6">
            <h2 className="py-4 text-3xl font-bold text-center">Contents</h2>
            <div className="divide-y divide-gray-700">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
                  onClick={() => handleTimeClick(guide.time)}
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserGuides;
