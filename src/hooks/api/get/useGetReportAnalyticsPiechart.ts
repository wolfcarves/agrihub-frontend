import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_ANALYTICS_PIECHART = () =>
  "GET_REPORT_ANALYTICS_PIECHART_KEY";

export default function useGetReportAnalyticsPiechart() {
  return useQuery({
    queryKey: [GET_REPORT_ANALYTICS_PIECHART()],
    queryFn: async () => {
      const data =
        await ReportsService.getApiReportsAnalyticsOverviewPiechart();
      return data;
    },
    keepPreviousData: true
  });
}
