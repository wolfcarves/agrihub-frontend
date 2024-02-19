import React from "react";

const EventBanner = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[20rem] rounded-b-sm overflow-hidden">
      <div className="flex flex-col gap-5 items-center justify-center z-10 text-center  w-full h-full">
        <h1 className="text-black/90 text-9xl font-poppins-semibold uppercase tracking-[10px] -me-[10px] sm:tracking-[20px] sm:-me-[20px]">
          Events
        </h1>

        <p className="text-black/90 text-md max-w-[30rem]">
          Stay informed, connected, and ahead of the curve with our
          comprehensive array of industry events, designed to empower your
          journey in agriculture
        </p>
      </div>
    </div>
  );
};

export default EventBanner;
