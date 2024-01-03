import React, { useState } from "react";
import useGetFarms from "../../../hooks/api/get/useGetFarms";
import { IoMdSearch } from "react-icons/io";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import { Button } from "../../../components/ui/button";
const Explore = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetFarms(undefined, String(page), undefined);
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log(data);
  return (
    <div>
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
            <div
              key={i}
              className="border border-border bg-[#F9F9F9] md:col-span-2 col-span-6 p-3 rounded-lg flex justify-between flex-col"
            >
              <div className="grid grid-cols-6">
                <img
                  src={farm.avatar}
                  className="h-12 rounded-lg aspect-square col-span-1 content-center object-cover object-center"
                  alt="avatar"
                />
                <div className=" col-span-5">
                  <div className=" font-semibold text-md">{farm.name}</div>
                  <div className="text-sm line-clamp-3 text-[#a9a9a9]">
                    {farm.description}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <Button className="">Apply</Button>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={Number(data?.pagination?.page)}
          totalPages={Number(data?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Explore;
