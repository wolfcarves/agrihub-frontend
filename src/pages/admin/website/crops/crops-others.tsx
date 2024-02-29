import TableCropsOthers from "@components/admin/website/crops/table/table-crops-others/table-crops-others";
import { Card } from "@components/ui/card";
import React from "react";

const CropsOthers = () => {
  return (
    <>
      <Card className="p-5 h-screen w-full">
        <TableCropsOthers />
      </Card>
    </>
  );
};

export default CropsOthers;
