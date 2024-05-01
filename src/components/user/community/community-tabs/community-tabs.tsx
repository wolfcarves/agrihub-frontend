import React from "react";
import TabNavlink from "../tab-navlink/tab-navlink";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const CommunityTabs = () => {
  const { data: UserData } = useAuth();
  const { id } = useParams();
  const isMember = id === UserData?.farm_id;
  return (
    <div className=" flex items-center gap-2 justify-start px-4 py-4 border-y border-border overflow-x-auto">
      <TabNavlink title="Overview" to={``} end />
      {isMember && <TabNavlink title="Analytics" to={`analytics`} />}
      <TabNavlink title="Crops" to={`crops`} />
      {isMember && <TabNavlink title="Members" to={`members`} />}
      {UserData && <TabNavlink title="Events" to={`events`} />}
      <TabNavlink title="Gallery" to={`gallery`} />
    </div>
  );
};

export default CommunityTabs;
