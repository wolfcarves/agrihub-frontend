import ContentWhatWeDo from "@components/user/landing/member/ContentWhatWeDo";
import ContentWhatWeDoMember from "@components/user/landing/member/ContentWhatWeDoMember";
import Carousel from "@components/user/landing/member/carousel/Carousel";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const renderContent = () => {
    return <ContentWhatWeDo />;
  };

  return (
    <div>
      <Carousel />
      {renderContent()}
    </div>
  );
};

export default withAuthGuard(Home, [
  "guest",
  "member",
  "admin",
  "farm_head",
  "farmer",
  "asst_admin"
]);
