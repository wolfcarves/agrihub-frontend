import React from "react";
import CropsReportTable from "../../../../components/user/community/crops-report/crops-report-table/crops-report-table";
import MemberTable from "../../../../components/user/community/member/member-table/member-table";

const Members = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-medium">Members</h3>
      </div>

      <MemberTable />
    </div>
  );
};

export default Members;
