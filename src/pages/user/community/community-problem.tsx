import React from "react";
import CommunityProblemTable from "../../../components/user/community/community-problem/community-problem-table/community-problem-table";

const CommunityProblem = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">Community Problem</h3>
      </div>
      <hr className="my-3 border-primary" />
      <CommunityProblemTable />
    </div>
  );
};

export default CommunityProblem;
