import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_ANALYTICS_USER_FEEDBACK = () =>
  "GET_REPORT_ANALYTICS_USER_FEEDBACK_KEY";

export default function useGetReportAnalyticsUserFeedback() {
  return useQuery({
    queryKey: [GET_REPORT_ANALYTICS_USER_FEEDBACK()],
    queryFn: async () => {
      const data =
        await ReportsService.getApiReportsAnalyticsOverviewUserFeedback();
      return data;
    },
    keepPreviousData: true
  });
}
