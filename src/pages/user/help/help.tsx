import React from "react";
import { Link, useParams } from "react-router-dom";
import { helpList } from "./helpData";

const Help = () => {
  const { ref } = useParams();

  const selectedHelpItem = helpList.find(
    item => item.title === ref || item.help.some(qa => qa.q === ref)
  );

  if (!selectedHelpItem) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          Help topic not found
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zavYNAOazUs?si=UwtKLKmM3y-4gcvC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  const { title, answer, help } = selectedHelpItem;

  return (
    <div className="leading-relaxed my-12 mx-4 md:mx-8">
      <div className="text-left space-y-3 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto">
        <h1 className="block text-gray-800 text-3xl font-semibold">{title}</h1>
        {help.some(qa => qa.q === ref) ? (
          <p className="text-gray-500 max-w-lg line-clamp-2">{answer}</p>
        ) : (
          ""
        )}
        <hr className="my-4" />
      </div>

      <div
        className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        {/* content */}
        <div className="grid gap-4 py-8 md:grid-cols-3">
          {help
            .filter(qa => qa.q === ref)
            .map((qa, index) => (
              <div key={index} className="space-y-3 mt-6 px-8 col-span-2">
                <h4 className="text-gray-800 text-xl font-semibold ">{qa.q}</h4>
                <p className="text-gray-500">{qa.a}</p>
              </div>
            ))}

          {help.some(qa => qa.q === ref) ? null : (
            <div className="space-y-3 mt-6 px-8 col-span-2">
              <p className="text-gray-500">{answer}</p>
            </div>
          )}

          {/* right bar links  */}
          <div className={`space-y-3 mt-6 px-8 col-start-3 `}>
            {help.map((question, index) => (
              <Link key={index} to={`/helps/${question.q}`}>
                <p className="hover:underline">{question.q}</p>
              </Link>
            ))}
          </div>
        </div>
        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-1/3 right-0 hidden md:block"></span>
        <div></div>
      </div>
    </div>
  );
};

export default Help;
