import React, { useState } from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import StatePagination from "../../state-pagination/state-pagination";
import Header from "./header";
const CropsReportTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const { id } = useParams();

  const { data: CropReport, isLoading } = useGetReportCropListQuery({
    id: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter,
    sort: undefined
  });

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  console.log(CropReport, "adsad");

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={CropReport?.reports || []} />
      </div>
      {!isLoading && (
        <StatePagination
          currentPage={Number(CropReport?.pagination?.page)}
          totalPages={Number(CropReport?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CropsReportTable;
