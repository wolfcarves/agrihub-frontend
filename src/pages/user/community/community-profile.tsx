import React from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import { Input } from "../../../components/ui/input";
import { useParams } from "react-router-dom";
import useGetFarmViewQuery from "../../../hooks/api/get/useGetFarmViewQuery";
import SelectDistrict from "../../../components/user/community/select-district/select-district";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";
import { district } from "../../../constants/data";
import { Textarea } from "../../../components/ui/textarea";
import Dropzone from "../../../components/user/community/dropzone/dropzone";
import CommunityUpload from "../../../components/user/community/community-upload/community-upload";
import { Button } from "../../../components/ui/button";
import CommunityProfileEditForm from "../../../components/user/community/form/CommunityProfileEditForm/CommunityProfileEditForm";

const CommunityProfile = () => {
  return (
    <OutletContainer className="px-2">
      <h3 className=" font-poppins-semibold">Edit Community Profile</h3>
      <CommunityProfileEditForm />
    </OutletContainer>
  );
};

export default CommunityProfile;
