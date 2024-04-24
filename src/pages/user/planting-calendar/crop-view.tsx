import { Button } from "@components/ui/button";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MONTHS } from "./planting-calendar";
import PlantingCalendarCard from "@components/user/community/card/PlantingCalendarCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PiPlant } from "react-icons/pi";
import { GiFruitBowl, GiPlantSeed } from "react-icons/gi";
import parse from "html-react-parser";
import SkeletonCropCard from "@components/user/calendar/skeleton/skeleton-crop-card";
import SkeletonCropView from "@components/user/calendar/skeleton/skeleton-crop-view";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Card } from "@components/ui/card";
import { TiArrowForwardOutline } from "react-icons/ti";
import { toast } from "sonner";

const CropView = () => {
  const { data, isLoading: isCropDataLoading } = useGetCropsQuery();
  const params = useParams();

  const cropData = data?.filter(p => p.name === params.cropName)[0];

  const { data: cropDatas, isLoading: isCropDataLoadings } = useGetCropsQuery();

  const crops = cropDatas?.map(data => (
    <PlantingCalendarCard
      key={data.id}
      name={data?.name}
      description={data?.description}
      image={data?.image}
      planting_season={data?.planting_season}
      growth_span={data?.growth_span}
      harvest_season={data?.harvest_season}
      seedling_season={data?.seedling_season}
      isyield={data?.isyield}
    />
  ));

  const handleShare = async (
    title: string | undefined,
    text: string | undefined,
    url: string | undefined
  ) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: `${window.location.origin}/${url}`
        });
      } else {
        throw new Error("Web Share API is not supported");
      }
    } catch (error: any) {
      toast(error.message, {
        duration: 2000,
        style: {
          backgroundColor: "#ff5733"
        }
      });
    }
  };

  return (
    <div className="w-full">
      <div className="my-4 sm:mx-8">
        <Link to="/planting-calendar">
          <span className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200">
            <FaArrowLeftLong /> Back
          </span>
        </Link>
      </div>
      {isCropDataLoading ? (
        <SkeletonCropView />
      ) : (
        <>
          <div className="mx-2 sm:m-8 relative h-[20rem] rounded-xl overflow-hidden bg-gray-200 border">
            <img src={cropData?.image} className="w-full h-full object-cover" />
          </div>

          <div className="mx-auto px-4 sm:px-8">
            <div className="flex-wrap items-center">
              <h1 className="text-9xl font-poppins-bold uppercase mt-5">
                {cropData?.name}
              </h1>
              <Card
                className="flex max-w-24 font-poppins-medium px-4 py-1 items-center justify-center cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleShare(
                    cropData?.name,
                    cropData?.description,
                    `planting-calendar/${cropData?.name}`
                  );
                }}
              >
                Share
                <TiArrowForwardOutline size="24" />
              </Card>
            </div>
            <h4 className="max-w-[70rem]">
              {parse(cropData?.description || "")}
            </h4>
          </div>
          <div className="mx-auto px-4 sm:px-8">
            <h1 className="text-xl font-bold">Companions:</h1>
            {cropData?.companion?.map((company, idx) => (
              <div key={idx}>
                <p className="text-lg">- {company}</p>
              </div>
            ))}
          </div>

          <div className="sm:mx-8 mt-10 flex justify-between text-center">
            <div className="space-y-3">
              <GiPlantSeed size={32} className="mx-auto" />
              <h5 className="font-poppins-medium">Seedling Season</h5>
              <h6>{MONTHS[Number(cropData?.seedling_season)]}</h6>
            </div>

            <div className="space-y-3">
              <PiPlant size={32} className="mx-auto" />
              <h5 className="font-poppins-medium">Planting Season</h5>
              <h6>{MONTHS[Number(cropData?.planting_season)]}</h6>
            </div>

            <div className="space-y-3">
              <GiFruitBowl size={32} className="mx-auto" />
              <h5 className="font-poppins-medium">Harvest Season</h5>
              <h6>{MONTHS[Number(cropData?.harvest_season)]}</h6>
            </div>
          </div>
        </>
      )}

      <div className="pt-8">
        <h1 className="text-3xl w-full text-center font-poppins-bold uppercase mt-5">
          other crops
        </h1>
      </div>

      <div className="relative gap-5 py-10 w-full">
        <Carousel
          className="mx-8"
          opts={{
            align: "start",
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <CarouselContent className="-ml-1">
            {isCropDataLoadings ? (
              <SkeletonCropCard count={4} />
            ) : crops?.length ? (
              crops.map((crop, index) => (
                <CarouselItem key={index} className="pl-1  sm:basis-1/3">
                  <div className="flex items-center justify-center">{crop}</div>
                </CarouselItem>
              ))
            ) : (
              <div className="w-full col-span-3 flex justify-center">
                <p className="text-gray-500">No Results</p>
              </div>
            )}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="my-10 mx-2 sm:mx-8">
        <Link to="..">
          <Button className="w-full" variant="outline">
            See all crops
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CropView;
