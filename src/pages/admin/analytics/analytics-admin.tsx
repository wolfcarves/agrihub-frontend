import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Card } from "@components/ui/card";
import React from "react";
import { Label } from "@components/ui/label";
import BarHarvestWithered from "../charts/bar-harvest-withered";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import { PiPottedPlantLight } from "react-icons/pi";
import { GiPlantRoots, GiPlantSeed } from "react-icons/gi";
import { IoLeaf } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  MdPendingActions,
  MdPestControl,
  MdReportGmailerrorred
} from "react-icons/md";
import { Link } from "react-router-dom";

const AnalyticsAdmin = () => {
  const Crops = [
    {
      id: "1",
      name: "Tomato",
      image: "https://source.unsplash.com/featured/?tomato",
      planted: 300,
      harvested: 200,
      withered: 50
    },
    {
      id: "2",
      name: "Carrot",
      image: "https://source.unsplash.com/featured/?carrot",
      planted: 250,
      harvested: 150,
      withered: 25
    },
    {
      id: "3",
      name: "Lettuce",
      image: "https://source.unsplash.com/featured/?lettuce",
      planted: 200,
      harvested: 100,
      withered: 30
    },
    {
      id: "4",
      name: "Broccoli",
      image: "https://source.unsplash.com/featured/?broccoli",
      planted: 180,
      harvested: 120,
      withered: 40
    },
    {
      id: "5",
      name: "Potato",
      image: "https://source.unsplash.com/featured/?potato",
      planted: 220,
      harvested: 180,
      withered: 60
    }
  ];

  return (
    <AdminOutletContainer>
      <div>
        <div className="grid grid-cols-12 grid-rows-9 gap-4">
          {/* overall growth rate */}
          <Card className="col-span-12 md:col-span-3 row-span-2 p-5 flex items-center">
            <div>
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
                <IoLeaf className="mr-1" /> 98%
              </h3>
              <p className="text-gray-600">Overall Growth Rate</p>
              <Label className="flex items-center">
                <BsGraphUpArrow className="text-green-500 mr-1" /> 0.3% higher
                than last month
              </Label>
            </div>
          </Card>

          {/* seedling request */}
          <Card className="col-span-12 md:col-span-3 row-span-2 md:col-start-4 p-5 flex items-center">
            <div>
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
                <GiPlantSeed className="mr-1" />
                1023
              </h3>
              <p className="text-gray-600">Seedling Request</p>
              <Link to="/admin/farm/seedling-pending ">
                <Label className="flex cursor-pointer hover:underline">
                  <MdPendingActions className="text-orange-500 mr-1" /> 6
                  pending request
                </Label>
              </Link>
            </div>
          </Card>

          {/* Farm reports pest */}
          <Card className="col-span-12 md:col-span-3 row-span-2 md:col-start-7 p-5 flex items-center">
            <div>
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl flex items-center">
                <MdPestControl className="mr-1" /> 32
              </h3>
              <p className="text-gray-600">Farm Problems Report</p>
              <Label className="flex">
                <MdReportGmailerrorred className="text-red-500 mr-1" /> 3
                reports needed an action
              </Label>
            </div>
          </Card>

          {/* main farm lowest growth rate */}
          <Card className="col-span-12 md:col-span-3 row-span-3 md:col-start-10 shadow-sm shadow-orange-500 border-red-500">
            <div className="flex justify-center items-center h-full">
              <div className=" mx-auto p-5">
                <div className="h-24 w-24 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <div className="text-[3em] p-0 m-0 leading-none text-red-500">
                      52%
                    </div>
                    <div>
                      <h3 className="text-gray-800 text-3xl font-semibold sm:text-xl">
                        Sharon Farm
                      </h3>
                      <div className="text-left font-semibold text-lg">
                        Growth Rate
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow grid">
                  <div className="text-left">
                    <div className=" text-gray-400 font-medium">
                      86% from last harvest
                    </div>
                  </div>
                  <Label className=" text-gray-400 text-left">
                    Sharon Farm is not doing well!!! Current plant growth is
                    lower than average growth by 80.28%.
                  </Label>
                </div>
              </div>
            </div>
          </Card>

          {/* other farm that got lowest growth rare */}
          <Card className="col-span-12 md:col-span-3 row-span-2 md:col-start-10 md:row-start-4">
            <div className="flex justify-center items-center h-full">
              <div className=" mx-auto p-5">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="h-16 w-16 mx-auto">
                      <img
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    </div>

                    <div>
                      <h3 className="text-gray-800 text-3xl font-semibold sm:text-xl line-clamp-1">
                        Sharon Farm
                      </h3>
                      <div className="text-left font-semibold text-lg">
                        <span className="text-red-500">54% </span>Growth Rate
                      </div>
                      <div className="text-left">
                        <div className=" text-gray-400 font-medium">
                          86% from last harvest
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow grid">
                  <Label className=" text-gray-400 text-left">
                    Sharon Farm is not doing well!!! Current plant growth is
                    lower than average growth by 80.28%.
                  </Label>
                </div>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-3 row-span-2 md:col-start-10 md:row-start-6">
            <div className="flex justify-center items-center h-full">
              <div className=" mx-auto p-5">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="h-16 w-16 mx-auto">
                      <img
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    </div>

                    <div>
                      <h3 className="text-gray-800 text-3xl font-semibold sm:text-xl line-clamp-1">
                        Sharon Farm
                      </h3>
                      <div className="text-left font-semibold text-lg">
                        <span className="text-red-500">59% </span>Growth Rate
                      </div>
                      <div className="text-left">
                        <div className=" text-gray-400 font-medium">
                          86% from last harvest
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow grid">
                  <Label className=" text-gray-400 text-left">
                    Sharon Farm is not doing well!!! Current plant growth is
                    lower than average growth by 80.28%.
                  </Label>
                </div>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-3 row-span-2 md:col-start-10 md:row-start-8">
            <div className="flex justify-center items-center h-full">
              <div className=" mx-auto p-5">
                <div>
                  <div className="flex items-center justify-center">
                    <div className="h-16 w-16 mx-auto">
                      <img
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    </div>

                    <div>
                      <h3 className="text-gray-800 text-3xl font-semibold sm:text-xl line-clamp-1">
                        Sharon Farm
                      </h3>
                      <div className="text-left font-semibold text-lg">
                        <span className="text-red-500">60% </span>Growth Rate
                      </div>
                      <div className="text-left">
                        <div className=" text-gray-400 font-medium">
                          86% from last harvest
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow grid">
                  <Label className=" text-gray-400 text-left">
                    Sharon Farm is not doing well!!! Current plant growth is
                    lower than average growth by 80.28%.
                  </Label>
                </div>
              </div>
            </div>
          </Card>

          <Card className="col-span-12 md:col-span-9 row-span-7 md:row-span-7 md:row-start-3 md:row-end-10 p-5">
            {/* Farm harvested */}
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Farm harvest and withered each month
              </h2>
              <BarHarvestWithered />
            </div>
            <hr className="my-4" />

            {/* favourite crops top crops */}
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Favourite Crops
              </h2>
              <p className="text-sm text-muted-foreground">
                Top planted crops in communities
              </p>
              <Carousel className="w-full">
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent className="-ml-1">
                  {Crops.map(crop => (
                    <CarouselItem
                      key={crop.id}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                          <img
                            src={crop.image}
                            alt={crop.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h5 className="text-lg font-bold">{crop.name}</h5>
                            <ul className="mt-3 text-sm flex justify-between w-full">
                              <div>
                                <div className="flex">
                                  <PiPottedPlantLight size={20} />{" "}
                                  {crop.planted}
                                </div>
                                planted
                              </div>

                              <div>
                                <div className="flex">
                                  <GiPlantRoots size={20} /> {crop.harvested}
                                </div>
                                harvested
                              </div>

                              <div>
                                <div className="flex">
                                  <PiPottedPlantLight size={20} />{" "}
                                  {crop.withered}
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
      </div>
    </AdminOutletContainer>
  );
};

export default AnalyticsAdmin;
