import React from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import Loader from "../../../icons/Loader";
import CommunityApplyForm from "../../../components/user/community/form/CommunityApplyForm/CommunityApplyForm";
import useGetCommunityFarmCheckExisting from "../../../hooks/api/get/useGetCommunityFarmCheckExisting";
import PendingMemberPage from "../../../components/user/community/member/pending-page/pending-member-page";

const CommunityApply = () => {
  const { error, isLoading } = useGetCommunityFarmCheckExisting();

  return (
    <OutletContainer className="relative">
      <Loader isVisible={isLoading} />
      {isLoading ? (
        <></>
      ) : error ? (
        <CommunityApplyForm />
      ) : (
        <PendingMemberPage />
      )}
    </OutletContainer>
  );
};

export default withAuthGuard(CommunityApply, ["member"]);
