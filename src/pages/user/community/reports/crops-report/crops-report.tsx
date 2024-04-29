import React, { useState } from "react";
import CropsReportTable from "../../../../../components/user/community/crops-report/crops-report-table/crops-report-table";
import withAuthGuard from "../../../../../higher-order/account/withAuthGuard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../../../../components/ui/tabs";
import CropsReportExisting from "./crops-report-existing";
import CropsReportActive from "./crops-report-planted-list";
import CropsReportPlantedList from "./crops-report-planted-list";

const CropsReport = () => {
  const [tab, setTab] = useState<string>("planted");
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">
          {tab === "planted" ? "Planted Crops" : "Crop Reports"}
        </h3>
      </div>

      <Tabs defaultValue="planted" onValueChange={value => setTab(value)}>
        <TabsList className="mt-3">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white font-poppins-semibold"
            value="planted"
          >
            Planted
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white font-poppins-semibold"
            value="report"
          >
            Reports
          </TabsTrigger>
        </TabsList>
        <hr className="my-3 border-primary" />
        <TabsContent value="planted">
          <CropsReportPlantedList />
        </TabsContent>
        <TabsContent value="report">
          <CropsReportTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default withAuthGuard(CropsReport, ["farm_head"]);
