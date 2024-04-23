import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_LAND_SIZE_ANALYTICS = () =>
  "GET_REPORT_LAND_SIZE_ANALYTICS_KEY";

export default function useGetReportLandSizeAnalyticsQuery() {
  return useQuery({
    queryKey: [GET_REPORT_LAND_SIZE_ANALYTICS()],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsFarmLandSizeAnalytics();
      return response;
    },
    keepPreviousData: true
  });
}
