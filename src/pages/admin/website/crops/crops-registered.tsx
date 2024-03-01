import TableCropsRegistered from "@components/admin/website/crops/table/table-crops-registered/table-crops-registered";
import { Card } from "@components/ui/card";
import React from "react";

const CropsRegistered = () => {
  console.log("natatawag ka ba ");
  return (
    <>
      <Card className="p-5 h-screen w-full">
        <TableCropsRegistered />
      </Card>
    </>
  );
};

export default CropsRegistered;
