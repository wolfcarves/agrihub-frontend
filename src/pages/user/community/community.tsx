import React, { useState } from "react";
import Analytics from "./tabs/analytics";
import Overview from "./tabs/overview";
import Reports from "./tabs/reports";
import Members from "./tabs/members";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";

const Community = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div>
      <div className="flex justify-center p-5 pb-[6rem] ">
        <div className="w-full h-[10rem] bg-slate-700 relative flex justify-center rounded-xl">
          <div className="absolute bg-white w-[96%] rounded-xl h-[10rem] top-[5rem]">
            <div className="pt-10 pl-20 flex gap-4">
              <img src="" className="h-20 w-20 bg-slate-500 rounded" />
              <div>
                <h4 className="font-semibold">Asdasdas</h4>
                <p>asdasdasdklaskldjlaskdjlsakdjlaskdjalsk</p>
                <p>asdasdasdklaskldjlaskdjlsakdjlaskdjalsk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 justify-start px-4 py-4 border-y border-border">
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "overview" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "analytics" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "reports" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("reports")}
        >
          Reports
        </button>
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "members" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("members")}
        >
          Members
        </button>
      </div>
      <div>
        {tab === "overview" && <Overview />}
        {tab === "analytics" && <Analytics />}
        {tab === "reports" && <Reports />}
        {tab === "members" && <Members />}
      </div>
    </div>
  );
};

export default withAuthGuard(Community, [
  "admin",
  "farm_head",
  "subfarm_head",
  "farmer"
]);
