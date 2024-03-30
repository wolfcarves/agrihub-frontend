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

const AnalyticsAdmin = () => {
  const [sort, setSort] = useState<"asc" | "desc" | undefined>("asc");
  const { data: lowestGrowth } = useGetReportAdminGrowthrate({ order: sort });
  const { data: favouriteCrop } = useGetReportFavouriteCrops();
  const { data: userFeedback } = useGetReportAnalyticsUserFeedback();

  const totalFeedback = useMemo(() => {
    return (
      Number(userFeedback?.dissatisfied) +
      Number(userFeedback?.neutral) +
      Number(userFeedback?.satisfied) +
      Number(userFeedback?.very_dissatisfied) +
      Number(userFeedback?.very_satisfied)
    );
  }, [userFeedback]);

  const feedbackPercentage = useMemo(() => {
    return (value: number) => {
      const percentage = value / totalFeedback;
      const final = percentage * 100;
      const finalValue = final.toFixed(0);
      return finalValue;
    };
  }, [totalFeedback]);

  const ratings = [
    {
      value: "5.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.very_satisfied))}%`
    },
    {
      value: "4.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.satisfied))}%`
    },
    {
      value: "3.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.neutral))}%`
    },
    {
      value: "2.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.dissatisfied))}%`
    },
    {
      value: "1.0",
      percentage: `${feedbackPercentage(
        Number(userFeedback?.very_dissatisfied)
      )}%`
    }
  ];
  return (
    <AdminOutletContainer>
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-10 gap-4 w-full">
        {/* 1 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 md:row-span-2 p-5">
          <PieSeed />
        </Card>

        {/* 2 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 md:row-span-2 md:col-start-4 p-5">
          <PieProblems />
        </Card>

        {/* 3 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 md:row-span-2 md:col-start-7 p-5">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-bold tracking-tight text-gray-700">
                User Feedback
              </h2>
              <div className="">
                <Link to="/admin/website/user-feedback">
                  <Button variant="outline" className="p-2 text-gray-700">
                    Suggestions
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center">
                  <p className="text-base text-gray-700 font-bold">
                    {rating.value}
                  </p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <div className="bg-gray-300 rounded w-full h-4 ml-3">
                    <div
                      className={`w-[${rating?.percentage}] h-full rounded bg-[#739072]`}
                    ></div>
                  </div>
                  <p className="text-base text-gray-700 font-bold ml-3">
                    {rating.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* right side */}
        <Card className="col-span-1 md:col-span-3 row-span-10 md:row-span-10 md:col-start-10 p-5">
          {/* lowest growth rate */}
          <div className="flex-col flex-wrap sm:flex-nowrap w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold tracking-tight ">Growth Rate</h2>
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
            <div className="overflow-y-auto h-[85rem] no-scrollbar">
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

        {/* gitna */}
        <Card className="col-span-1 md:col-span-9 row-span-5 md:row-span-5 md:row-start-3 p-5 h-[44.3rem] overflow-y-auto no-scrollbar">
          {/* harvested and withered each month */}
          <div className="h-96">
            <BarHarvestWithered />
          </div>
          <hr className="mt-16 mb-4" />
          <div className="h-96">
            <GrowthRateLineChart />
          </div>
          <hr className="my-4" />
          <h2 className="text-xl font-bold tracking-tight ">
            Farms each district
          </h2>
          <div className="h-96">
            <BarDistrictOverview />
          </div>
          <hr className="my-4" />
        </Card>

        {/* pinaka baba */}
        <Card className="col-span-1 md:col-span-9 row-span-3 md:row-span-3 md:row-start-8 p-5">
          {/* favourite crops */}
          <div className="">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Favourite Crops
                </h2>
                <p className="text-sm text-muted-foreground">
                  Top planted crops in communities
                </p>
              </div>
              <Select>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Most Planted" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Least">Most Planted</SelectItem>
                  <SelectItem value="Most">Least Planted</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {favouriteCrop?.map((crop, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
    </AdminOutletContainer>
  );
};

export default AnalyticsAdmin;
