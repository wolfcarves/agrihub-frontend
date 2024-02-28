import { Button } from "@components/ui/button";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MONTHS } from "./calendar";
import LoadingSpinner from "@icons/LoadingSpinner";
import PlantingCalendarCard from "@components/user/community/card/PlantingCalendarCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PiPlant } from "react-icons/pi";
import { GiFruitBowl, GiPlantSeed } from "react-icons/gi";

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

  return (
    <div className="w-full">
      <div className="m-8 relative h-[20rem] rounded-xl overflow-hidden bg-gray-200 border">
        {isCropDataLoading ? (
          <LoadingSpinner className="absolute inset-0 text-gray-400 text-lg m-auto" />
        ) : (
          <img src={cropData?.image} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="mx-auto px-8">
        <h1 className="text-9xl font-poppins-bold uppercase mt-5">
          {cropData?.name}
        </h1>
        <h4 className="w-[70rem]">{cropData?.description}</h4>
      </div>

      <div className="mx-8 mt-10 flex justify-between text-center">
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
              <LoadingSpinner className="mx-auto mt-2 absolute top-20 text-primary start-0 end-0" />
            ) : crops?.length ? (
              crops.map((crop, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/3">
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

      <div className="my-10 mx-8">
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
