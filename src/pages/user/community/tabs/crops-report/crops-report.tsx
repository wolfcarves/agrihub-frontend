import React from "react";
import CropsReportTable from "../../../../../components/user/community/crops-report/crops-report-table/crops-report-table";

const CropsReport = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">Crops Report</h3>
      </div>
      <hr className="my-3 border-primary" />
      <CropsReportTable />
    </div>
  );
};

export default CropsReport;
