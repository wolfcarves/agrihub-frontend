import React, { useState } from "react";
import useGetReportAdminGrowthrate from "../../../hooks/api/get/useGetReportAdminGrowthrate";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "../../../components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
import FallbackImg from "@assets/images/agrihub-leaves.png";
import { Card } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";
const TableFarmGrowthrate = () => {
  const [sort, setSort] = useState<"asc" | "desc" | undefined>("asc");
  const { data: lowestGrowth } = useGetReportAdminGrowthrate({ order: sort });

  return (
    <>
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
        <div>
          <h2 className="text-xl font-bold tracking-tight ">
            Top 5 Farms With {sort === "desc" ? "Highest" : "Lowest"} Growth
            Rate
          </h2>
          {/* <p className="text-xs text-gray-400">
            Click the dots to view the growth rate summary of that month
          </p> */}
        </div>
        <div className="flex gap-4 justify-end">
          <Select
            onValueChange={e => setSort(e as "asc" | "desc" | undefined)}
            defaultValue="asc"
          >
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Lowest</SelectItem>
              <SelectItem value="desc">Highest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Avatar</TableHead>
            <TableHead>Farm Name</TableHead>
            <TableHead>Growth Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lowestGrowth?.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="p-0">
                <Avatar className=" border border-border">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>
                    <img src={FallbackImg} />
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.farm_name}</TableCell>
              <TableCell>{`${Number(item.avg_growth_rate).toFixed(
                0
              )}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableFarmGrowthrate;
