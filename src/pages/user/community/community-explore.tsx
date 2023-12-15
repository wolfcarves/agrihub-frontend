import React, { useState } from "react";
import useGetFarms from "../../../hooks/api/get/useGetFarms";
import { IoMdSearch } from "react-icons/io";
import Pagination from "@components/ui/custom/pagination/pagination";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
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
        <div className="grid grid-cols-6 gap-2 mt-4">
          {data?.farms?.map((farm, i) => (
            <div key={i} className="border border-border col-span-2 p-3">
              <div>{farm.name}</div>
              <div>{farm.description}</div>
              <div>
                <button className="border border-gray-500 py-1 px-4 text-base">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={Number(data?.pagination?.page)}
        totalPages={Number(data?.pagination?.total_pages)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Explore;
