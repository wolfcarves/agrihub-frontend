import React, { useState } from "react";
import CropsReportTable from "../../../../components/user/community/crops-report/crops-report-table/crops-report-table";
import MemberTable from "../../../../components/user/community/member/member-table/member-table";
import MemberApplicationTable from "../../../../components/user/community/member/member-application-table/member-application-table";

const Members = () => {
  const [tab, setTab] = useState<"member" | "application">("member");
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex items-center mb-4">
        <button
          className={`text-lg font-poppins-medium px-3 py-1 ${
            tab === "member" && "border-b-2 border-primary text-primary"
          }`}
          onClick={() => setTab("member")}
        >
          Members
        </button>
        <button
          className={`text-lg font-poppins-medium px-3 py-1 ${
            tab === "application" && "border-b-2 border-primary text-primary"
          }`}
          onClick={() => setTab("application")}
        >
          Applications
        </button>
      </div>
      {tab === "member" ? (
        <MemberTable />
      ) : tab === "application" ? (
        <MemberApplicationTable />
      ) : null}
    </div>
  );
};

export default Members;
