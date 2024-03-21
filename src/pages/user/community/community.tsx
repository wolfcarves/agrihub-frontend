import React, { useEffect, useState } from "react";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import useAuth from "../../../hooks/useAuth";
import CommunityLanding from "./community-landing";
import { useNavigate } from "react-router-dom";
import DialogBannedCommunity from "../../../components/user/community/dialog-banned-community/dialog-banned-community";
import { Helmet } from "react-helmet-async";

const Community = () => {
  const navigate = useNavigate();
  const { data: UserData, isFetching } = useAuth();

  useEffect(() => {
    if (UserData?.farm_id) {
      navigate(`/community/my-community/${UserData?.farm_id}/`);
    }
  }, [UserData]);

  return (
    <>
      <Helmet>
        <title>AgriHub | Community</title>
      </Helmet>
      {!isFetching && !UserData?.farm_id && <CommunityLanding />}
    </>
  );
};

export default withAuthGuard(Community, [
  "guest",
  "member",
  "admin",
  "farm_head",
  "subfarm_head",
  "farmer"
]);
