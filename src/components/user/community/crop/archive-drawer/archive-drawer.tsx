import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../../../ui/drawer";
import CropsArchiveTable from "../crops-archive-table/crops-archive-table";
import { Button } from "../../../../ui/button";
import { LuFolderArchive } from "react-icons/lu";
const ArchiveDrawer = () => {
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger asChild>
        <Button variant={"outline"} className=" gap-2">
          <LuFolderArchive size={15} /> Archive List
        </Button>
      </DrawerTrigger>
      <DrawerContent vaul-drawer-wrapper>
        <div className=" h-[80vh] p-3 md:px-32 overflow-auto scroll-smooth">
          <CropsArchiveTable />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ArchiveDrawer;
