import React from "react";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link } from "react-router-dom";
import CommunityIllustration from "@assets/images/community.png";
import useAuth from "@hooks/useAuth";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";
import FarmCard from "../../../components/user/community/farm-card/farm-card";
const CommunityLanding = () => {
  const { isAuthenticated, data: userData } = useAuth();
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "3"
  });
  return (
    <OutletContainer className="min-h-screen">
      <div className="py-10">
        {/* Header */}
        <div className="flex flex-wrap gap-x-3 justify-between">
          <h6 className="font-poppins-medium tracking-tight">
            Farm Community on Agrihub
          </h6>

          {isAuthenticated && userData?.role === "member" && (
            <div>
              <Link
                to={"/community/register"}
                className="text-sm hover:underline"
              >
                Register your community?
              </Link>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex">
          <div className="w-full max-w-[25rem] mt-20">
            <h2 className="font-poppins-semibold tracking-tight leading-[2.3rem]">
              Be a part of growing farm community in Quezon City.
            </h2>

            <p className="mt-5">
              Engaging in a farm community is essential for promoting
              sustainable agriculture, fostering collaboration among farmers,
              and preserving local economies and traditions.
            </p>

            <div className="mt-10">
              <Link to="explore">
                <Button>Discover</Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={CommunityIllustration} />
          </div>
        </div>
      </div>

      <p>
        Areas of practice, technology, and provider organizations already on
        Communities:
      </p>

      <div className="grid grid-cols-6 gap-2 mb-20 mt-10">
        {data?.farms
          ?.filter(farm => farm.id !== userData?.farm_id)
          .map((farm, i) => <FarmCard farm={farm} index={i} />)}
      </div>
    </OutletContainer>
  );
};

export default CommunityLanding;
