import React, { useMemo, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetRequestSeedlingList from "../../../../../hooks/api/get/useGetRequestSeedlingList";
import DialogRequestSeedling from "../dialog-request-seedling/dialog-request-seedling";
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
import { CSVLink } from "react-csv";
import { Button } from "../../../../ui/button";
import { PiFileCsvFill } from "react-icons/pi";

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

  const { data: AllData, isLoading: exportLoad } = useGetRequestSeedlingList({
    id: id || "",
    page: "1",
    perpage: "100000",
    filter: filter
  });

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  const headers = [
    { label: "Crop Name", key: "name" },
    { label: "Status", key: "status" },
    { label: "Farm Name", key: "farm_name" },
    { label: "Quantity Request", key: "request" }
  ];

  const seedlingData = useMemo(() => {
    return (
      AllData?.data?.map(item => ({
        name: item.name === null ? item.other : item.name,
        status: item.status,
        farm_name: item.farm_name,
        request: item.quantity_request
      })) || []
    );
  }, [AllData]);

  const currentDate = new Date();
  const currentDateTime = currentDate.toISOString();

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <Input
          placeholder="Search crop..."
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Button>
            <CSVLink
              className="flex items-center gap-1"
              data={seedlingData}
              headers={headers}
              filename={`seedling-request-${currentDateTime}.csv`}
            >
              <PiFileCsvFill size={18} /> Export
            </CSVLink>
          </Button>

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
          <DialogRequestSeedling />
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
