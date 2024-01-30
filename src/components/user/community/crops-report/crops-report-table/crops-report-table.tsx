import React from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useNavigate, useParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { Button } from "../../../../ui/button";
import { IoMdAdd } from "react-icons/io";

const CropsReportTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: CropReport } = useGetReportCropListQuery({
    id: id || "",
    search: "",
    page: "",
    perpage: undefined,
    filter: [],
    sort: undefined
  });
  const handleAddReport = () => {
    navigate("add");
  };
  console.log(CropReport, "asdsad");
  return (
    <div>
      <div className="my-2 flex justify-end">
        <Button onClick={handleAddReport} className="flex items-center gap-1">
          <IoMdAdd size={15} /> Report
        </Button>
      </div>
      <DataTable columns={columns} data={CropReport?.reports || []} />
    </div>
  );
};

export default CropsReportTable;
