import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Card } from "@components/ui/card";
import React, { useRef, useState } from "react";
import BarHarvestWithered from "../charts/bar-harvest-withered";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import { PiPottedPlantLight } from "react-icons/pi";
import { GiPlantRoots } from "react-icons/gi";
import useGetReportAdminGrowthrate from "../../../hooks/api/get/useGetReportAdminGrowthrate";
import useGetReportFavouriteCrops from "../../../hooks/api/get/useGetReportFavouriteCrops";
import BarDistrictOverview from "../charts/bar-district-overview";
import RatesFeedback from "../charts/rates-feedback";
import GrowthRateLineChartAnalytics from "../charts/line-growthrate-analytics";
import TableFarmGrowthrate from "../charts/table-farm-growthrate";
import DougnutLandsizeAnalytics from "../charts/dougnut-landsize-analytics";
import banner from "@assets/analytics-top.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
import BarDistrictOverviewAnalytics from "../charts/bar-district-overview-analytics";
import { Skeleton } from "../../../components/ui/skeleton";
import BarCropHarvest from "../charts/bar-crop-harvest";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../../components/ui/button";
import { Margin, Resolution, usePDF } from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa6";

const AnalyticsAdmin = () => {
  const [sort, setSort] = useState<"asc" | "desc" | undefined>("asc");
  const { data: lowestGrowth, isLoading: TopFarmLoad } =
    useGetReportAdminGrowthrate({ order: "desc" });
  const { data: favouriteCrop } = useGetReportFavouriteCrops();

  // console.log(lowestGrowth[0], "asdasd");
  const { toPDF, targetRef } = usePDF({
    filename: `${new Date().toLocaleDateString()}-report.pdf`,
    page: {
      format: "legal"
    }
  });

  return (
    <AdminOutletContainer>
      <div className="grid grid-cols-12  gap-4 w-full print:w-[50rem]">
        {/* <div className=" col-span-12 flex justify-end">
          <Button className="gap-1" onClick={() => toPDF()}>
            <FaFilePdf size={16} /> Export PDF
          </Button>
        </div> */}
        <div
          ref={targetRef}
          className=" col-span-12 lg:col-span-12 flex flex-col gap-y-4"
        >
          <div className=" grid grid-cols-12  gap-4">
            {TopFarmLoad ? (
              <Skeleton className="col-span-12 lg:col-span-8 md:h-[350px] h-[250px] rounded relative" />
            ) : (
              <div className="col-span-12 lg:col-span-8 md:h-[350px] h-[250px] rounded border border-border relative">
                <img
                  src={banner}
                  className="rounded h-full w-full object-fill object-center"
                />
                <Avatar className=" absolute top-[26%] left-[4%] lg:h-[12.5rem] lg:w-[12.5rem] sm:h-[7.5rem] sm:w-[7.5rem] h-[5.5rem] w-[5.5rem]  border-[5px] border-white">
                  <AvatarImage
                    src={lowestGrowth && lowestGrowth[0]?.avatar}
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    {lowestGrowth && lowestGrowth[0]?.farm_name?.charAt(1)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute md:top-[10.4rem] top-[6.5rem] right-[10%] uppercase md:text-lg w-[55%] text-end text-md font-poppins-bold text-white">
                  {lowestGrowth && lowestGrowth[0]?.farm_name}
                </div>
                <div className="absolute md:bottom-[2.5rem] bottom-[2.5rem] right-[10%] uppercase md:text-3xl text-xl font-poppins-bold text-white">
                  {lowestGrowth &&
                    Number(lowestGrowth[0].avg_growth_rate).toFixed(2)}
                  %
                </div>
              </div>
            )}
            <Card className="col-span-12 lg:col-span-4  p-5">
              <RatesFeedback />
            </Card>
          </div>
          <div>
            <BarHarvestWithered />
          </div>
          <Card className="p-5">
            <BarDistrictOverviewAnalytics />
          </Card>
          <div>
            <GrowthRateLineChartAnalytics />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <Card className="p-5 col-span-12 lg:col-span-8">
              <TableFarmGrowthrate />
            </Card>
            <Card className="col-span-12 lg:col-span-4 p-5">
              {/* favourite crops */}
              <div className="">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">
                      Favourite Crops
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Top 5 planted crops in communities
                    </p>
                  </div>
                </div>
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: true
                    })
                  ]}
                  className="grid grid-cols-1"
                >
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
                  <CarouselPrevious className=" -left-[1rem] -top-[10rem]" />
                  <CarouselNext className=" -right-[1rem] -top-[10rem]" />
                </Carousel>
              </div>
            </Card>
          </div>
          <div>
            <DougnutLandsizeAnalytics />
          </div>
          <div>
            <BarCropHarvest />
          </div>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default AnalyticsAdmin;
