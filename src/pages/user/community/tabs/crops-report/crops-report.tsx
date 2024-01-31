import React from "react";
import CropsReportTable from "../../../../../components/user/community/crops-report/crops-report-table/crops-report-table";

const CropsReport = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-medium">Crops</h3>
      </div>
      <CropsReportTable />
    </div>
  );
};

export default CropsReport;
