import React, { useState } from "react";
import { Input } from "@components/ui/input";
import { columns } from "./columns";
import useGetLearningPublishedList from "@hooks/api/get/useGetLearningPublishedList";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import useGetRequestSeedlingListAll from "../../../../hooks/api/get/useGetRequestSeedlingListAll";

const TableSeedlingPending = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: SeedlingData, error } = useGetRequestSeedlingListAll({
    perpage: "20",
    page: "1",
    search: search,
    filter: "pending"
  });
  console.log(SeedlingData);

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search title..."
          className="max-w-sm"
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={SeedlingData || []} />
    </div>
  );
};

export default TableSeedlingPending;
