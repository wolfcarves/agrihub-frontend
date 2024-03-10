import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/colums-question";

const QuestionsArchive = () => {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default withAuthGuard(
  QuestionsArchive,
  ["admin", "asst_admin"],
  "forums"
);
