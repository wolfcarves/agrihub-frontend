import React from "react";
import BackButton from "@components/ui/custom/button/back-button";
import CommunityEventTitle from "@components/user/event/title/CommunityEventTitle";
import CommunityEventDetailsList from "@components/user/event/list/CommunityEventDetailsList";

const CommunityEvent = () => {
  return (
    <div className="container">
      <div className="pt-10 sm:mx-8 w-max">
        <BackButton />
      </div>
      <CommunityEventTitle />
      <CommunityEventDetailsList />
    </div>
  );
};

export default CommunityEvent;
