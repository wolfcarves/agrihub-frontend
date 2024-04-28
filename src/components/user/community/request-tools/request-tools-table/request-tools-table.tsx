import React, { useMemo, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetRequestSeedlingList from "../../../../../hooks/api/get/useGetRequestSeedlingList";

import { useParams } from "react-router-dom";
import { Input } from "../../../../ui/input";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import StatePagination from "../../state-pagination/state-pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import DialogRequestTool from "../dialog-request-tools/dialog-request-tool";
import useGetRequestToolListAllQuery from "../../../../../hooks/api/get/useGetRequestToolListAllQuery";
import { Button } from "../../../../ui/button";
import { CSVLink } from "react-csv";
import { PiFileCsvFill } from "react-icons/pi";
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
    | undefined
  >(undefined);
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetRequestToolListAllQuery({
    farmid: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter
  });
  const { data: ToolExport } = useGetRequestToolListAllQuery({
    farmid: id || "",

    page: "1",
    perpage: "100000",
    filter: filter
  });

  const headers = [
    { label: "Tool Requested", key: "tool_requested" },
    { label: "Quantity Requested", key: "quantity_requested" },
    { label: "Farm Name", key: "farm_name" },
    { label: " Status", key: "status" }
  ];

  const toolData = useMemo(() => {
    return (
      ToolExport?.data?.map(item => ({
        tool_requested: item.tool_requested,
        quantity_requested: item.quantity_requested,
        farm_name: item.farm_name,
        status: item.status
      })) || []
    );
  }, [ToolExport]);

  const currentDate = new Date();
  const currentDateTime = currentDate.toISOString();

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
          <Button>
            <CSVLink
              className="flex items-center gap-1"
              data={toolData}
              headers={headers}
              filename={`tool-request-${currentDateTime}.csv`}
            >
              <PiFileCsvFill size={18} /> Export
            </CSVLink>
          </Button>
          <Select
            onValueChange={value =>
              setFilter(
                value === "All"
                  ? undefined
                  : (value as
                      | "pending"
                      | "accepted"
                      | "communicating"
                      | "rejected"
                      | "forwarded"
                      | "completed")
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
                <SelectItem value="communicating">Communicating</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="forwarded">Forwarded</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DialogRequestTool />
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
