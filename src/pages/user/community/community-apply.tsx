import React from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import CommunityRegisterForm from "../../../components/user/community/form/CommunityRegisterForm/CommunityRegisterForm";
import useGetFarmCheckExistingApplication from "@hooks/api/get/useGetFarmCheckExistingApplication";
import PendingPage from "../../../components/user/community/pending-page/pending-page";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import Loader from "../../../icons/Loader";
import CommunityApplyForm from "../../../components/user/community/form/CommunityApplyForm/CommunityApplyForm";

const CommunityApply = () => {
  // const { error, isLoading } = useGetFarmCheckExistingApplication();
  return (
    <OutletContainer className="relative">
      {/* <Loader isVisible={isLoading} />
      {isLoading ? <></> : error ? <CommunityRegisterForm /> : <PendingPage />} */}
      <CommunityApplyForm />
    </OutletContainer>
  );
};

export default withAuthGuard(CommunityApply, ["member"]);
