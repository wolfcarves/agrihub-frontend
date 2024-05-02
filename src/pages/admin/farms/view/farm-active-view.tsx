import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import React, { useMemo, useRef, useState } from "react";
import FarmActiveDetails from "./farm-active/farm-active-details";
import { Card } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import RequestSeedlingsTable from "../../../../components/admin/community-view/request-seedlings-table/request-seedlings-table";
import { useParams } from "react-router-dom";
import CropsReportTable from "../../../../components/admin/community-view/crops-report-table/crops-report-table";
import CommunityProblemTable from "../../../../components/admin/community-view/community-problem-table/community-problem-table";
import useGetFarmGalleryQuery from "../../../../hooks/api/get/useGetFarmGalleryQuery";
import { CropGalleryItem } from "../../../../api/openapi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../../../components/ui/tooltip";
import ImgModal from "../../../../components/ui/custom/img-modal/Modal";
import useGetFarmCropsQuery from "../../../../hooks/api/get/useGetFarmCropsQuery";
import CropCard from "../../../../components/user/community/crop/crop-card/crop-card";
import RequestToolsTable from "../../../../components/admin/community-view/request-tools-table/request-tools-table";
import MemberTable from "../../../../components/admin/community-view/member-table/member-table";
import { CSVLink } from "react-csv";
import useGetFarmViewQuery from "@hooks/api/get/useGetFarmViewQuery";
import { Button } from "@components/ui/button";
import { PiFileCsvFill } from "react-icons/pi";
import { useReactToPrint } from "react-to-print";

const breadcrumbItems = [
  {
    title: "Community Farms",
    link: "/admin/community/farms/"
  },
  {
    title: "Farm Details",
    link: "/admin/community/farms/view/8700"
  }
];
const FarmActiveView = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  const { data: farmDetails } = useGetFarmViewQuery(id || "");
  const [selectedImage, setSelectedImage] = useState<CropGalleryItem | null>(
    null
  );

  const galleryPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Farm images",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true
  });
  const communityCropsHeaders = [
    {
      label: "Crop Name",
      key: "cropname"
    },
    {
      label: "Growth Span",
      key: "growthspan"
    },
    {
      label: "Seedling Season",
      key: "seedling"
    },
    {
      label: "Planting Season",
      key: "planting"
    },
    {
      label: "Harvest Season",
      key: "harvest"
    }
  ];

  const communityCropsData = useMemo(() => {
    return (
      farmCrops?.map(item => ({
        cropname: item.name || "",
        growthspan: item.growth_span || "",
        seedling: item.seedling_season || "",
        planting: item.planting_season || "",
        harvest: item.harvest_season || ""
      })) || []
    );
  }, [farmCrops]);

  const handleImageClick = (image: CropGalleryItem) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Community Details
          </h2>
          <p className="text-sm text-muted-foreground">
            See all details about this community.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <Tabs defaultValue="details" className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="report">Report</TabsTrigger>
              <TabsTrigger value="seedling">Seedling</TabsTrigger>
              <TabsTrigger value="tool">Tool</TabsTrigger>
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="details">
          <Card className="p-5">
            <FarmActiveDetails />
            {/* <FarmActiveCrops /> */}
            <div>
              <div className="flex justify-between items-center my-2">
                <h2 className="text-xl font-bold tracking-tight">
                  Community Crops:
                </h2>
                <Button>
                  <CSVLink
                    className="flex items-center gap-1"
                    data={communityCropsData}
                    headers={communityCropsHeaders}
                    filename={`available-crops-in-${farmDetails?.farm_name}.csv`}
                  >
                    <PiFileCsvFill size={18} /> Export
                  </CSVLink>
                </Button>
              </div>
              <div className="grid grid-cols-12 gap-3">
                {farmCrops?.map((crop, i) => <CropCard crop={crop} key={i} />)}
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center my-2">
              <h2 className="text-xl font-bold tracking-tight">Gallery:</h2>
              <Button
                onClick={() => {
                  handlePrint(null, () => galleryPrint.current);
                }}
              >
                print
              </Button>
            </div>
            <TooltipProvider>
              <div className="flex gap-3 flex-wrap" ref={galleryPrint}>
                {farmGallery?.map((gallery, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger className="relative">
                      <img
                        className="h-[10rem] rounded hover:shadow-lg"
                        src={gallery.imagesrc}
                        onClick={() => handleImageClick(gallery)}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{gallery.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
                {selectedImage && (
                  <ImgModal setModal={closeModal}>
                    <p className=" text-gray-700 font-poppins-medium text-center mb-3">
                      {selectedImage.description}
                    </p>
                    <img
                      src={selectedImage.imagesrc}
                      alt="Full View"
                      className="max-w-full h-[20rem] max-h-full"
                    />
                  </ImgModal>
                )}
              </div>
            </TooltipProvider>
          </Card>
        </TabsContent>
        <TabsContent value="report">
          <Card className="p-5">
            <div className="flex justify-between">
              <h3 className=" font-poppins-semibold">Crops Report</h3>
            </div>
            <hr className="my-3 border-primary" />
            <CropsReportTable />
          </Card>
        </TabsContent>
        <TabsContent value="seedling">
          <Card className="p-5">
            <div className="flex justify-between">
              <h3 className=" font-poppins-semibold">Seedling Request</h3>
            </div>
            <hr className="my-3 border-primary" />
            <RequestSeedlingsTable />
          </Card>
        </TabsContent>
        <TabsContent value="tool">
          <Card className="p-5">
            <div className="flex justify-between">
              <h3 className=" font-poppins-semibold">Tool Request</h3>
            </div>
            <hr className="my-3 border-primary" />
            <RequestToolsTable />
          </Card>
        </TabsContent>
        <TabsContent value="problem">
          <Card className="p-5">
            <div className="flex justify-between">
              <h3 className=" font-poppins-semibold">Community Problem</h3>
            </div>
            <hr className="my-3 border-primary" />
            <CommunityProblemTable />
          </Card>
        </TabsContent>
        <TabsContent value="members">
          <Card className="p-5">
            <div className="flex justify-between">
              <h3 className=" font-poppins-semibold">Community Members</h3>
            </div>
            <hr className="my-3 border-primary" />
            <MemberTable />
          </Card>
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default FarmActiveView;
