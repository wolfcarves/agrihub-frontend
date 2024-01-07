import SeeMore from "@components/user/landing/Button/SeeMore";
import ContentLatest from "@components/user/landing/latest/ContentLatest";
import Imagebanner from "@components/user/landing/latest/imagebanner";
import React from "react";

const AboutLatest = () => {
  return (
    <div>
     <Imagebanner/>
     <ContentLatest/>
     <SeeMore/>
    </div>
  );
};

export default AboutLatest;
