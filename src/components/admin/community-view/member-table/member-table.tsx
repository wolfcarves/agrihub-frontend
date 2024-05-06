import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { columns } from "./columns";
import Header from "./header";
import useGetFarmMembersQuery from "../../../../hooks/api/get/useGetFarmMembersQuery";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import { Button } from "@components/ui/button";
import { CSVLink } from "react-csv";
import { PiFileCsvFill } from "react-icons/pi";
const MemberTable = () => {
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

  const headers = [
    { label: "Name", key: "name" },
    { label: "Role", key: "role" }
  ];

  const memberData = useMemo(() => {
    return (
      MemberData?.members?.map(item => ({
        name: item?.firstname || "" + item?.lastname || "",
        role: item?.role || ""
      })) || []
    );
  }, [MemberData]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Header
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <Button>
          <CSVLink
            className="flex items-center gap-1"
            data={memberData}
            headers={headers}
            filename={`farm-members.csv`}
          >
            <PiFileCsvFill size={18} /> Export
          </CSVLink>
        </Button>
      </div>
      <DataTable columns={columns} data={MemberData?.members || []} />
    </div>
  );
};

export default MemberTable;
