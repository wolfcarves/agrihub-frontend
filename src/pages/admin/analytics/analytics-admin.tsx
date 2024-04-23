import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Card } from "@components/ui/card";
import React, { useState } from "react";
import BarHarvestWithered from "../charts/bar-harvest-withered";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import { PiPottedPlantLight } from "react-icons/pi";
import { GiPlantRoots } from "react-icons/gi";
import useGetReportAdminGrowthrate from "../../../hooks/api/get/useGetReportAdminGrowthrate";
import useGetReportFavouriteCrops from "../../../hooks/api/get/useGetReportFavouriteCrops";
import BarDistrictOverview from "../charts/bar-district-overview";
import PieSeed from "../charts/pie-seed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import PieProblems from "../charts/pie-problem";
import RatesFeedback from "../charts/rates-feedback";
import GrowthRateLineChartAnalytics from "../charts/line-growthrate-analytics";
import FallbackImg from "@assets/images/agrihub-leaves.png";
import TableFarmGrowthrate from "../charts/table-farm-growthrate";
import DougnutLandsizeAnalytics from "../charts/dougnut-landsize-analytics";
import banner from "@assets/images/admin-banner.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
const AnalyticsAdmin = () => {
  const [sort, setSort] = useState<"asc" | "desc" | undefined>("asc");
  const { data: lowestGrowth } = useGetReportAdminGrowthrate({ order: "desc" });
  const { data: favouriteCrop } = useGetReportFavouriteCrops();

  // console.log(lowestGrowth[0], "asdasd");

  return (
    <AdminOutletContainer>
      <div className="grid grid-cols-12  gap-4 w-full">
        <div className=" col-span-12 lg:col-span-12 flex flex-col gap-y-4">
          <div className=" grid grid-cols-12  gap-4">
            <div className="col-span-12 lg:col-span-8 md:h-[350px] h-[250px] rounded border border-border relative">
              <img src={banner} className="rounded h-full w-full" />
              <Avatar className=" absolute top-[5.5rem] left-[4%] lg:h-[9.5rem] lg:w-[9.5rem] sm:h-[7.5rem] sm:w-[7.5rem] h-[5.5rem] w-[5.5rem]  border-[5px] border-white">
                <AvatarImage
                  src={lowestGrowth && lowestGrowth[0]?.avatar}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {lowestGrowth && lowestGrowth[0]?.farm_name?.charAt(1)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute md:top-[10.4rem] top-[6.5rem] right-[10%] uppercase md:text-3xl text-xl font-poppins-bold text-white">
                {lowestGrowth && lowestGrowth[0]?.farm_name}
              </div>
              <div className="absolute bottom-[2.5rem] right-[8%] uppercase md:text-3xl text-xl font-poppins-bold text-white">
                {lowestGrowth &&
                  Number(lowestGrowth[0].avg_growth_rate).toFixed(2)}
                %
              </div>
            </div>
            <Card className="col-span-12 lg:col-span-4  p-5">
              <RatesFeedback />
            </Card>
          </div>
          <div>
            <BarHarvestWithered />
          </div>
          <div>
            <GrowthRateLineChartAnalytics />
          </div>
          <Card className="p-5">
            <BarDistrictOverview />
          </Card>
          <div className="grid grid-cols-12 gap-4">
            <Card className="p-5 col-span-12 md:col-span-8">
              <TableFarmGrowthrate />
            </Card>
            <Card className="col-span-12 md:col-span-4 p-5">
              {/* favourite crops */}
              <div className="">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">
                      Favourite Crops
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Top planted crops in communities
                    </p>
                  </div>
                </div>
                <Carousel className="grid grid-cols-1">
                  <CarouselContent className="">
                    {favouriteCrop?.map((crop, i) => (
                      <CarouselItem key={i} className=" col-span-1">
                        <div className="h-full">
                          <div className="bg-white shadow-md rounded-lg border-border border overflow-hidden">
                            <img
                              src={crop.image}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h5 className="text-lg font-bold">
                                {crop.crop_name}
                              </h5>
                              <ul className="mt-3 text-sm flex justify-between w-full">
                                <div>
                                  <div className="flex">
                                    <PiPottedPlantLight size={20} />{" "}
                                    {crop.total_planted}
                                  </div>
                                  planted
                                </div>

                                <div>
                                  <div className="flex">
                                    <GiPlantRoots size={20} />{" "}
                                    {crop.total_harvested}
                                  </div>
                                  harvested
                                </div>

                                <div>
                                  <div className="flex">
                                    <PiPottedPlantLight size={20} />{" "}
                                    {crop.total_withered}
                                  </div>
                                  withered
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </Card>
          </div>
          <div>
            <DougnutLandsizeAnalytics />
          </div>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default AnalyticsAdmin;
