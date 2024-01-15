import ContentWhatWeDo from "@components/user/landing/member/ContentWhatWeDo";
import Carousel from "@components/user/landing/member/carousel/Carousel";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ContentWhatWeDo />
    </div>
  );
};

export default withAuthGuard(Home, ["guest", "member"]);
