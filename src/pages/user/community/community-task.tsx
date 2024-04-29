import React from "react";
import CommunityProblemTable from "../../../components/user/community/community-problem/community-problem-table/community-problem-table";
import CommunityTaskTable from "../../../components/user/community/community-task/community-task-table/community-task-table";

const CommunityTask = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">Community Task</h3>
      </div>
      <hr className="my-3 border-primary" />
      <CommunityTaskTable />
    </div>
  );
};

export default CommunityTask;
