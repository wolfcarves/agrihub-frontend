import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_ANALYTICS_PREDEFINED = () =>
  "GET_REPORT_ANALYTICS_PREDEFINED_KEY";

export default function useGetReportsAnalyticsPredefined() {
  return useQuery({
    queryKey: [GET_REPORT_ANALYTICS_PREDEFINED()],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsAnalyticsPreDefined();
      return response;
    },
    keepPreviousData: true
  });
}
