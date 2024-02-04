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

const CommunityProfile = () => {
  const { id } = useParams();

  const { data: farmDetails } = useGetFarmViewQuery(id || "");
  console.log(farmDetails);
  return (
    <OutletContainer>
      <h3 className=" font-poppins-semibold">Edit Community Profile</h3>

      <form className="pb-10">
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-center lg:col-span-5 col-span-12">
            <h5 className=" font-poppins-semibold">Community Profile</h5>
            <p className=" text-sm text-gray-500">
              Update your community photo and details here.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Name</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community name
            </p>
          </div>
          <Input
            defaultValue={farmDetails?.farm_name}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Description</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community description
            </p>
          </div>
          <Textarea
            defaultValue={farmDetails?.description}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Logo</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community logo
            </p>
          </div>
          <div className=" lg:col-span-6 col-span-12 ">
            <CommunityUpload
              defaultValue={farmDetails?.avatar}
              variant="circle"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Background</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community background photo
            </p>
          </div>
          <div className=" lg:col-span-6 col-span-12 ">
            <CommunityUpload
              defaultValue={farmDetails?.cover_photo}
              variant="rectangle"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Size</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community land size
            </p>
          </div>
          <Input
            type="number"
            defaultValue={farmDetails?.size}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Location</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community address
            </p>
          </div>
          <Input
            defaultValue={farmDetails?.location}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">District</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community District
            </p>
          </div>
          <Select defaultValue={farmDetails?.district}>
            <SelectTrigger className="lg:col-span-6 col-span-12 focus-visible:ring-0 border-2">
              <SelectValue
                placeholder={farmDetails?.district || `Select district...`}
              />
            </SelectTrigger>
            <SelectContent>
              {district.map((id, i) => (
                <SelectItem key={i} value={id}>
                  {id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </form>
    </OutletContainer>
  );
};

export default CommunityProfile;
