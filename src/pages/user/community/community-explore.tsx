import React, { useState } from "react";
import useGetFarms from "../../../hooks/api/get/useGetFarms";
import { IoMdSearch } from "react-icons/io";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";

const Explore = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetFarmListQuery({
    search: undefined,
    page: String(page),
    filter: undefined,
    perpage: undefined
  });
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log(data);
  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="font-bold text-4xl">Discover Communities</h1>
        <div></div>
      </div>
      <div className="px-4 py-4 flex border-y gap-3 border-border">
        <IoMdSearch size={22} />
        <input type="text" className="" placeholder="Search for community" />
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold">Farm Community Lists</h3>
        <p className="text-sm text-gray-400">
          Search for a farm community where you belong to
        </p>
        <div className="grid grid-cols-6 gap-2 mt-4 mb-3">
          {data?.farms?.map((farm, i) => (
            <Link
              to={`/community/explore/${farm.id}`}
              key={i}
              className="flex flex-col col-span-2 w-full h-full border rounded-md p-4 shadow-md"
            >
              <div className="flex gap-3">
                <img
                  src={farm.avatar}
                  className="w-10 h-10 rounded-lg bg-slate-500 object-center object-cover shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-blue-500 hover:text-blue-700">
                    {farm.farm_name}
                  </span>
                  <span className="text-sm">11 members </span>
                </div>
              </div>
              <p className="text-sm mt-2 line-clamp-3">{farm.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
