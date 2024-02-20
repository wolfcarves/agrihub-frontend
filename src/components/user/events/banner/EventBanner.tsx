import React from "react";

const EventBanner = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[25rem] rounded-b-sm overflow-hidden">
      <div className="absolute inset-0 bg-foreground/40">
        <img
          alt="banner"
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full brightness-90"
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10 text-center  w-full h-full">
        <h1 className="text-[10rem] text-white font-poppins-semibold uppercase sm:tracking-[10px] sm:-me-[10px] h-[13rem] -mt-12 bg-clip-text bg-gradient-to-r from-primary to-amber-500 text-transparent">
          Events
        </h1>

        <p className="text-white text-md max-w-[30rem] ">
          Stay informed, connected, and ahead of the curve with our
          comprehensive array of industry events, designed to empower your
          journey in agriculture
        </p>
      </div>
    </div>
  );
};

export default EventBanner;
