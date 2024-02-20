import React from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import CommunityProfileEditForm from "../../../components/user/community/form/CommunityProfileEditForm/CommunityProfileEditForm";

const CommunityProfile = () => {
  return (
    <OutletContainer className="  px-2">
      <h3 className=" font-poppins-semibold">Edit Community Profile</h3>
      <CommunityProfileEditForm />
    </OutletContainer>
  );
};

export default CommunityProfile;
