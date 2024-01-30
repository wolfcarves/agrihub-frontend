import React from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useParams } from "react-router-dom";

const CropsReportTable = () => {
  const { id } = useParams();
  const { data } = useGetReportCropListQuery({
    id: id || "",
    search: "",
    page: "",
    perpage: "",
    filter: [],
    sort: ""
  });
  console.log(data, "asdsad");
  return (
    <div></div>
    // <DataTable columns={columns} data={applications?.applications || []} />
  );
};

export default CropsReportTable;
