import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { columns } from "./columns";
import Header from "./header";
import StatePagination from "../../../user/community/state-pagination/state-pagination";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import useGetReportCropListQuery from "../../../../hooks/api/get/useGetReportCropListQuery";
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
      {!isLoading && Number(CropReport?.pagination?.total_records) !== 0 && (
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
