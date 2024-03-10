import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/colums-question";

const QuestionsPosted = () => {
  return (
    <>
      <DataTable data={data} columns={columns} />
    </>
  );
};

export default withAuthGuard(
  QuestionsPosted,
  ["admin", "asst_admin"],
  "forums"
);
