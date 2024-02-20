import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_TOTAL_HARVESTED = () =>
  "GET_REPORT_TOTAL_HARVESTED_KEY";

export default function useGetReportTotalHarvestQuery() {
  return useQuery({
    queryKey: [GET_REPORT_TOTAL_HARVESTED()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerTotalHarvested();
      return data;
    },
    keepPreviousData: true
  });
}
