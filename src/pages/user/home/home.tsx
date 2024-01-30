import ContentWhatWeDo from "@components/user/landing/member/ContentWhatWeDo";
import ContentWhatWeDoMember from "@components/user/landing/member/ContentWhatWeDoMember";
import Carousel from "@components/user/landing/member/carousel/Carousel";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useState } from "react";


interface HomeProps {
  // Empty for now
}

const Home: React.FC<HomeProps> = () => {
  const [userLevel, setUserLevel] = useState<string>("guest");

  const handleUserLevelChange = (newLevel: string) => {
    setUserLevel(newLevel);
  };

  const renderContent = () => {
    switch (userLevel) {
      case "guest":
        return <ContentWhatWeDo />;
      case "member":
        return <ContentWhatWeDoMember />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Carousel/>
      {renderContent()}
    </div>
  );
};

export default withAuthGuard(Home, ["guest", "member"]);
