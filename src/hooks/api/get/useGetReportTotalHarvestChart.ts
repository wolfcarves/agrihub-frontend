import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_TOTAL_HARVEST_CHART = () =>
  "GET_REPORT_TOTAL_HARVEST_CHART_KEY";

export default function useGetReportTotalHarvestChart(id: string) {
  return useQuery({
    queryKey: [GET_REPORT_TOTAL_HARVEST_CHART(), id],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerGraphTotalHarvest({
        id
      });
      return data;
    },
    keepPreviousData: true
  });
}
