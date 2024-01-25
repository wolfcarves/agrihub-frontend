import React, { useState } from "react";

import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link } from "react-router-dom";
import CommunityIllustration from "@assets/images/community.png";
import CommunityCard from "@components/user/community/card/CommunityCard";
import useGetFarms from "@hooks/api/get/useGetFarms";
import useAuth from "@hooks/useAuth";

const Community = () => {
  const { isAuthenticated, data: userData } = useAuth();
  const [page, setPage] = useState(1);
  const { data } = useGetFarms(undefined, String(page), undefined);
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log(data);

  return (
    <OutletContainer>
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

      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        <CommunityCard
          id="1"
          title="Kuya Rodel's Farm"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus delectus sint perspiciatis fugit voluptatibus corrupti voluptatum similique molestias ad!"
        />
        <CommunityCard
          id="1"
          title="Kuya Rodel's Farm"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus delectus sint perspiciatis fugit voluptatibus corrupti voluptatum similique molestias ad!"
        />
        <CommunityCard
          id="1"
          title="Kuya Rodel's Farm"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus delectus sint perspiciatis fugit voluptatibus corrupti voluptatum similique molestias ad!"
        />
        <CommunityCard
          id="1"
          title="Kuya Rodel's Farm"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus delectus sint perspiciatis fugit voluptatibus corrupti voluptatum similique molestias ad!"
        />
      </div>
    </OutletContainer>
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
