import React, { useState } from "react";
import { columns } from "./columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { useParams } from "react-router-dom";
import useGetRequestSeedlingList from "../../../../hooks/api/get/useGetRequestSeedlingList";
import useDebounce from "../../../../hooks/utils/useDebounce";
import Input from "../../../ui/custom/input/input";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import StatePagination from "../../../user/community/state-pagination/state-pagination";

const RequestSeedlingsTable = () => {
  const { id } = useParams();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<
    "pending" | "accepted" | "rejected" | ""
  >("");
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetRequestSeedlingList({
    id: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter
  });

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <Input
          placeholder="Search crop..."
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Select
            onValueChange={value =>
              setFilter(
                value === "All"
                  ? ""
                  : (value as "pending" | "accepted" | "rejected")
              )
            }
          >
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* <DialogRequestSeedling /> */}
        </div>
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={data?.data || []} />
      </div>
      {!isLoading && Number(data?.pagination?.total_records) !== 0 && (
        <StatePagination
          currentPage={Number(data?.pagination?.page)}
          totalPages={Number(data?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default RequestSeedlingsTable;
