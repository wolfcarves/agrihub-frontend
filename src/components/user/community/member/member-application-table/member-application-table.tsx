import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import Header from "./header";
import useGetFarmMembersQuery from "../../../../../hooks/api/get/useGetFarmMembersQuery";
const MemberApplicationTable = () => {
  const { id } = useParams();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string>("member");
  const { data: MemberData } = useGetFarmMembersQuery({
    id: id || "",
    search: search,
    page: "",
    perpage: undefined,
    filter: filter
  });

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <DataTable columns={columns} data={MemberData?.members || []} />
    </div>
  );
};

export default MemberApplicationTable;
