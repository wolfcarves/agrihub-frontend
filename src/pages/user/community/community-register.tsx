import React from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import CommunityRegisterForm from "../../../components/user/community/form/CommunityRegisterForm/CommunityRegisterForm";
import useGetFarmCheckExistingApplication from "@hooks/api/get/useGetFarmCheckExistingApplication";
import PendingPage from "../../../components/user/community/pending-page/pending-page";

const CommunityRegister = () => {
  const { error } = useGetFarmCheckExistingApplication();
  return (
    <OutletContainer>
      {error ? <CommunityRegisterForm /> : <PendingPage/>}
    </OutletContainer>
  );
};

export default CommunityRegister;
