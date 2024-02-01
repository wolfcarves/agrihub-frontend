import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_PIE_CHART = () => "GET_REPORT_PIE_CHART_KEY";

export default function useGetReportPiechartQuery() {
  return useQuery({
    queryKey: [GET_REPORT_PIE_CHART()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerGraphPiechart();
      return data;
    },
    keepPreviousData: true
  });
}
