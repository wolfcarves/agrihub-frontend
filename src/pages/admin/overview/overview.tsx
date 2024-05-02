import React from "react";
import Autoplay from "embla-carousel-autoplay";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Card } from "@components/ui/card";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { GiPlantSeed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Label } from "@components/ui/label";
import { MdPendingActions } from "react-icons/md";
import GrowthRateLineChart from "../charts/line-growthrate";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "../activities/table/columns-activity";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import { IoBookSharp, IoCameraOutline } from "react-icons/io5";
import {
  RiCalendarEventLine,
  RiCommunityLine,
  RiFeedbackLine
} from "react-icons/ri";
import useGetReportFavouriteCrops from "@hooks/api/get/useGetReportFavouriteCrops";
import { Button } from "@components/ui/button";
import useGetReportResourceCountDetailed from "../../../hooks/api/get/useGetReportResourceCountDetailed";
import useGetReportsCommonOverview from "../../../hooks/api/get/useGetReportsCommonOverview";
import useGetAuditLogsListQuery from "../../../hooks/api/get/useGetAuditLogsListQuery";

const OverviewAdmin = () => {
  const { data: favouriteCrop } = useGetReportFavouriteCrops();
  const { data: resourceDetailed } = useGetReportResourceCountDetailed();
  const { data: overviewCards } = useGetReportsCommonOverview();

  const { data: logsData } = useGetAuditLogsListQuery(undefined, "1", "10");

  return (
    <AdminOutletContainer>
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-12 gap-4">
        {/* 1 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 p-4 flex justify-start items-center w-full">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
              <RiCommunityLine className="mr-1" />
              {overviewCards?.community_farms}
            </h3>
            <hr className="my-1" />
            <p className="text-gray-600">Farm Registered</p>
            <Link to="/admin/community/farms-application?tab=pending">
              <Label className="flex cursor-pointer hover:underline">
                <MdPendingActions className="text-orange-500 mr-1" />{" "}
                {overviewCards?.pending_farm_applications} pending application
              </Label>
            </Link>
          </div>
        </Card>
        {/* 2 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 p-4 flex justify-start items-center w-full">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
              <GiPlantSeed className="mr-1" />
              {overviewCards?.seedling_requests}
            </h3>
            <hr className="my-1" />
            <p className="text-gray-600">Seedling Request</p>
            <Link to="/admin/community/seedling-request?tab=pending">
              <Label className="flex cursor-pointer hover:underline">
                <MdPendingActions className="text-orange-500 mr-1" />
                {overviewCards?.pending_seedling_requests} pending request
              </Label>
            </Link>
          </div>
        </Card>

        {/* 3 */}
        <Card className="col-span-1 md:col-span-3 row-span-2 p-4 flex justify-start items-center w-full">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
              <RiFeedbackLine className="mr-1" />
              {overviewCards?.user_feedbacks}
            </h3>
            <hr className="my-1" />
            <p className="text-gray-600">User Feedback</p>
            <Link to="/admin/website/user-feedback">
              <Label className="flex cursor-pointer hover:underline">
                <MdPendingActions className="text-orange-500 mr-1" />{" "}
                {overviewCards?.user_feedbacks} unread feedback
              </Label>
            </Link>
          </div>
        </Card>

        {/* big center */}
        <Card className="col-span-1 md:col-span-9 row-span-10 p-4 w-full">
          {/* <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl flex items-center">
            Farms Growth Rate
          </h3> */}
          <div className="h-96 w-full">
            <GrowthRateLineChart />
          </div>
          <hr className="mt-14 mb-2" />
          <div className="h-96">
            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl flex items-center">
              Recent activities
            </h3>
            <DataTable
              columns={columns}
              data={logsData?.data?.slice(0, 3) || []}
            />
            <Link to="/admin/record/activity-logs">
              <Button variant="outline" className="w-full mt-4">
                see all
              </Button>
            </Link>
          </div>
        </Card>

        {/* upper right */}
        <Card className="col-span-1 md:col-span-3 md:row-span-3 p-4 flex-col justify-center items-center w-full  md:row-start-1 md:col-start-10">
          <h3 className="text-gray-800 text-lg font-semibold sm:text-xl flex items-center justify-center mb-4">
            Resources
          </h3>
          <div className="w-full">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000
                })
              ]}
              className=""
            >
              <CarouselContent>
                <CarouselItem className="flex items-center justify-center">
                  <div className="">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex-col text-center justify-center items-center">
                      <IoBookSharp className="mx-auto" />
                      {resourceDetailed?.all_learning_materials}
                    </h3>
                    <p className="text-gray-600 text-center">
                      Published Learning Materials
                    </p>
                    <Link to="/admin/resource/learnings?tab=draft">
                      <Label className="flex cursor-pointer hover:underline justify-center">
                        <MdPendingActions className="text-orange-500 mr-1" />
                        {resourceDetailed?.draft_learning_material}&nbsp;
                        currently in draft
                      </Label>
                    </Link>
                  </div>
                </CarouselItem>

                <CarouselItem className="flex items-center justify-center">
                  <div>
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl justify-center flex-col items-center text-center">
                      <RiCalendarEventLine className="mx-auto" />
                      {resourceDetailed?.events}
                    </h3>
                    <p className="text-gray-600 text-center">Events done</p>
                    <Link to="/admin/resource/events">
                      <Label className="flex justify-center cursor-pointer hover:underline">
                        <MdPendingActions className="text-orange-500 mr-1" />
                        {resourceDetailed?.upcoming_events}&nbsp; upcoming
                        events
                      </Label>
                    </Link>
                  </div>
                </CarouselItem>

                <CarouselItem className="flex items-center justify-center">
                  <div>
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex-col items-center text-center">
                      <IoCameraOutline className="mx-auto" />
                      {resourceDetailed?.blogs}
                    </h3>
                    <p className="text-gray-600 text-center">Blogs posted</p>
                    <Link to="/admin/resource/blogs?tab=draft">
                      <Label className="flex cursor-pointer hover:underline justify-center">
                        <MdPendingActions className="text-orange-500 mr-1" />
                        {resourceDetailed?.draft_blogs}&nbsp; currently in draft
                      </Label>
                    </Link>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>

        {/* rightest */}
        <Card className="col-span-1 md:col-span-3 md:col-start-10 row-span-9 p-4 flex justify-start items-center w-full">
          <div className="">
            <h2 className="text-xl font-bold tracking-tight">65 Total Crops</h2>
            <p className="text-sm text-muted-foreground">
              21 unrecognized crops found
            </p>
            <hr className="my-2" />
            <div className="overflow-y-auto h-[40rem] no-scrollbar">
              {favouriteCrop?.map((crop, i) => (
                <div className="p-1" key={i}>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      src={crop.image}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="text-lg font-bold">{crop.crop_name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(OverviewAdmin, ["admin", "asst_admin"]);
