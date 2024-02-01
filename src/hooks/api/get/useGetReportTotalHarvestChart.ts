import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_TOTAL_HARVEST_CHART = () =>
  "GET_REPORT_TOTAL_HARVEST_CHART_KEY";

export default function useGetReportTotalHarvestChart() {
  return useQuery({
    queryKey: [GET_REPORT_TOTAL_HARVEST_CHART()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerGraphTotalHarvest();
      return data;
    },
    keepPreviousData: true
  });
}
