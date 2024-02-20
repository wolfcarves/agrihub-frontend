import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_GROWTH_CHART = () => "GET_REPORT_GROWTH_CHART_KEY";

export default function useGetReportGrowthChart() {
  return useQuery({
    queryKey: [GET_REPORT_GROWTH_CHART()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerGraphGrowthHarvest();
      return data;
    },
    keepPreviousData: true
  });
}
