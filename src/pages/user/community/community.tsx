import React, { useState } from "react";
import Analytics from "./tabs/analytics";
import Overview from "./tabs/overview";
import Reports from "./tabs/reports";
import Members from "./tabs/members";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Link } from "react-router-dom";
import CommunityIllustration from "@assets/images/community.png";
import CommunityCard from "@components/user/community/card/CommunityCard";
import useGetFarms from "@hooks/api/get/useGetFarms";
import useAuth from "@hooks/useAuth";

const Community = () => {
  const [tab, setTab] = useState<string>("overview");
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
              <Link to="">
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

/*
LIPAT MO NALANG TO MEN SA MISMONG DASHBOARD NG FARMER

 <div className="w-full">
      <div className="flex justify-center p-5 pb-[6rem] ">
        <div className="w-full h-[10rem] bg-slate-700 relative flex justify-center rounded-xl">
          <div className="absolute bg-white w-[96%] rounded-xl h-[10rem] top-[5rem]">
            <div className="pt-10 px-20 grid grid-cols-10">
              <div className=" col-span-7">
                <h4 className="font-semibold">
                  Farm Name: Harmony Haven Farms
                </h4>
                <p className=" text-sm">
                  Welcome to Harmony Haven Farms, where the beauty of nature
                  meets the bounty of the land. Nestled in the picturesque
                  countryside, our family-owned farm is a haven for those
                  seeking a tranquil escape and a taste of wholesome living.
                </p>
              </div>
              <div className=" col-span-2 flex justify-end items-center pr-8">
                <Button className="">Join Farm</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 justify-start px-4 py-4 border-y border-border">
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "overview" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "analytics" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "reports" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("reports")}
        >
          Reports
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "members" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("members")}
        >
          Members
        </button>
      </div>
      <div>
        {tab === "overview" && <Overview />}
        {tab === "analytics" && <Analytics />}
        {tab === "reports" && <Reports />}
        {tab === "members" && <Members />}
      </div>
    </div>
*/
