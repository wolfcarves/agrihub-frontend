import React from "react";

const EventBanner = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[25rem] rounded-b-sm overflow-hidden">
      <div className="absolute inset-0 bg-foreground/40">
        <img
          alt="banner"
          src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full brightness-50 contrast-80"
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10 text-center w-full h-full">
        <h1 className="text-9xl md:text-[8rem] font-poppins-semibold uppercase sm:tracking-[10px] sm:-me-[10px] bg-clip-text bg-gradient-to-r text-transparent from-green-200 via-slate-50 to-green-200">
          Events
        </h1>

        <p className="text-white text-md max-w-[30rem]">
          Stay informed, connected, and ahead of the curve with our
          comprehensive array of industry events, designed to empower your
          journey in agriculture
        </p>
      </div>
    </div>
  );
};

export default EventBanner;
