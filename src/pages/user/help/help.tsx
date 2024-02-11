import React from "react";
import { useParams } from "react-router-dom";
import { helpList } from "./helpData";

const Help = () => {
  const { ref } = useParams();

  const selectedHelpItem = helpList.find(item => item.ref === ref);

  if (!selectedHelpItem) {
    return <div>Help topic not found</div>;
  }

  const { title, desc, help, child } = selectedHelpItem;
  const rowSpan: number = help.length;
  return (
    <div className="leading-relaxed my-12 mx-4 md:mx-8">
      <div className="text-left space-y-3 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto">
        <h1 className="block text-gray-800 text-3xl font-semibold">{title}</h1>
        <p className="text-gray-500 max-w-lg">{desc}</p>
        <hr className="my-4" />
      </div>

      <div
        className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        <div className="grid gap-4 py-8 md:grid-cols-3">
          {help.map(qa => (
            <div className="space-y-3 mt-6 px-8 col-span-2">
              <h4 className="text-gray-800 text-xl font-semibold ">{qa.q}</h4>
              <p className="text-gray-500">{qa.a}</p>
            </div>
          ))}

          <div
            className={`space-y-3 mt-6 px-8 col-start-3 row-start-1 row-span-${rowSpan}`}
          >
            {child?.map(list => <p className="text-gray-500">{list.title}</p>)}
          </div>
        </div>
        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-1/3 right-0 hidden md:block"></span>
      </div>
    </div>
  );
};

export default Help;
