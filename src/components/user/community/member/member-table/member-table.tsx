import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { memberData } from "../../../../../constants/data";
import Header from "./header";
const MemberTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string>("member");

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <DataTable columns={columns} data={memberData} />
    </div>
  );
};

export default MemberTable;
