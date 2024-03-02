import React from "react";
import {
  data,
  columns
} from "../../../../pages/admin/farms/table/columns-farm-problems";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
const FarmProblemsCommon = () => {
  return (
    <Card className="p-5">
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </Card>
  );
};

export default FarmProblemsCommon;
