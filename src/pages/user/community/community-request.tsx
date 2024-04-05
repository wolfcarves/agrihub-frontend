import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../../components/ui/tabs";
import SeedlingsRequest from "./request/seedlings-request/seedlings-request";
import ToolsRequest from "./request/tools-request/tools-request";

const CommunityRequest = () => {
  const [tab, setTab] = useState<string>("seedlings");
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">
          {tab === "seedlings" ? "Seedlings Request" : "Tool Request"}
        </h3>
      </div>

      <Tabs defaultValue="seedlings" onValueChange={value => setTab(value)}>
        <TabsList className="mt-3">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white font-poppins-semibold"
            value="seedlings"
          >
            Seedlings
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white font-poppins-semibold"
            value="tools"
          >
            Tools
          </TabsTrigger>
        </TabsList>
        <hr className="my-3 border-primary" />
        <TabsContent value="seedlings">
          <SeedlingsRequest />
        </TabsContent>
        <TabsContent value="tools">
          <ToolsRequest />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityRequest;
