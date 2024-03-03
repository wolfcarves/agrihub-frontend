import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_DISTRICT_FARM = () => "GET_REPORT_DISTRICT_FARM_KEY";

export default function useGetReportDistrictFarm() {
  return useQuery({
    queryKey: [GET_REPORT_DISTRICT_FARM()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsAdminFarmsDistrict();
      return data;
    },
    keepPreviousData: true
  });
}
