import React from "react";
import CropsReportTable from "../../../../../components/user/community/crops-report/crops-report-table/crops-report-table";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";

const CropsReport = () => {
  const navigate = useNavigate();
  const handleAddReport = () => {
    navigate("add");
  };
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h3 className=" font-poppins-medium">Crops</h3>
        <Button onClick={handleAddReport} className="flex items-center gap-1">
          <IoMdAdd size={15} /> Report
        </Button>
      </div>
      <CropsReportTable />
    </div>
  );
};

export default CropsReport;
