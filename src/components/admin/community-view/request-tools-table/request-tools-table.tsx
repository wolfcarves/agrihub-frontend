import React, { useState } from "react";
import { columns } from "./columns";
import useGetRequestToolListAllQuery from "../../../../hooks/api/get/useGetRequestToolListAllQuery";
import useDebounce from "../../../../hooks/utils/useDebounce";
import Input from "../../../ui/custom/input/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { useParams } from "react-router-dom";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import StatePagination from "../../../user/community/state-pagination/state-pagination";

const RequestToolsTable = () => {
  const { id } = useParams();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<
    | "pending"
    | "accepted"
    | "communicating"
    | "rejected"
    | "forwarded"
    | "completed"
  >("pending");
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetRequestToolListAllQuery({
    farmid: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter
  });
  console.log(data);

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
          placeholder="Search tool..."
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Select
            onValueChange={value =>
              setFilter(
                value as
                  | "pending"
                  | "accepted"
                  | "communicating"
                  | "rejected"
                  | "forwarded"
                  | "completed"
              )
            }
          >
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="communicating">Communicating</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="forwarded">Forwarded</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* <DialogRequestTool /> */}
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

export default RequestToolsTable;
