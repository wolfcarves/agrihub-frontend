import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Card } from "@components/ui/card";
import React, { useMemo, useState } from "react";
import { Label } from "@components/ui/label";
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
import LineForumOverview from "../charts/line-forum-overview";
import { Button } from "@components/ui/button";
import PieSeed from "../charts/pie-seed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import DoughnutResource from "../charts/dougnut-resource-overview";
import GrowthRateLineChart from "../charts/line-growthrate";
import PieProblems from "../charts/pie-problem";
import { Link } from "react-router-dom";
import useGetReportAnalyticsUserFeedback from "../../../hooks/api/get/useGetReportAnalyticsUserFeedback";
import RatesFeedback from "../charts/rates-feedback";

const AnalyticsAdmin = () => {
  const [sort, setSort] = useState<"asc" | "desc" | undefined>("asc");
  const { data: lowestGrowth } = useGetReportAdminGrowthrate({ order: sort });
  const { data: favouriteCrop } = useGetReportFavouriteCrops();

  return (
    <AdminOutletContainer>
      <div className="grid grid-cols-12  gap-4 w-full">
        <div className=" col-span-12 md:col-span-9 flex flex-col gap-y-4">
          <div className=" grid grid-cols-12  gap-4">
            <Card className="col-span-12 md:col-span-4  p-5">
              <PieSeed />
            </Card>
            <Card className="col-span-12 md:col-span-4  p-5">
              <PieProblems />
            </Card>
            <Card className="col-span-12 md:col-span-4  p-5">
              <RatesFeedback />
            </Card>
          </div>
          <Card className="p-5">
            <BarHarvestWithered />
          </Card>
          <Card className="p-5">
            <GrowthRateLineChart />
          </Card>
          <Card className="p-5">
            <BarDistrictOverview />
          </Card>
          <Card className="col-span-1 md:col-span-9 row-span-3 md:row-span-3 md:row-start-8 p-5">
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
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {favouriteCrop?.map((crop, i) => (
                    <CarouselItem
                      key={i}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
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
        {/* right side */}
        <div className="col-span-12 md:col-span-3">
          <Card className="  p-5">
            {/* lowest growth rate */}
            <div className="flex-col flex-wrap sm:flex-nowrap w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold tracking-tight ">
                  Growth Rate
                </h2>
                <Select
                  onValueChange={e => setSort(e as "asc" | "desc" | undefined)}
                >
                  <SelectTrigger className="w-auto">
                    <SelectValue placeholder="Lowest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Lowest</SelectItem>
                    <SelectItem value="desc">Highest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <hr className="my-2" />
              <div className="overflow-y-auto h-full no-scrollbar">
                {lowestGrowth?.map((item, i) => (
                  <Card key={i} className="p-4 mb-4">
                    <div className="flex justify-center items-center h-full">
                      <div className=" mx-auto p-5">
                        <div className="h-24 w-24 mx-auto">
                          <img
                            src={item.avatar}
                            className="w-full h-full rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="flex flex-col items-center justify-center">
                            <h3 className="text-gray-800 text-3xl font-semibold text-center sm:text-xl line-clamp-2">
                              {item.farm_name}
                            </h3>
                            <div className="text-[3em] p-0 m-0 leading-none text-green-700">
                              {Number(item.avg_growth_rate).toFixed(0)}%
                            </div>
                            <div className="text-left font-semibold text-lg">
                              Growth Rate
                            </div>
                          </div>
                        </div>

                        <div className="flex-grow grid">
                          {/* <div className="text-left">
                            <div className=" text-gray-400 font-medium">
                              86% from last harvest
                            </div>
                          </div> */}
                          {/* <Label className=" text-gray-400 text-left">
                      Sharon Farm is not doing well!!! Current plant growth is
                      lower than average growth by 80.28%.
                    </Label> */}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default AnalyticsAdmin;
