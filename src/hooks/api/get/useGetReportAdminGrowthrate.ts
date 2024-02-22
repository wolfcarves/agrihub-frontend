import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";
export const GET_REPORT_ADMIN_GROWTH_RATE = () =>
  "GET_REPORT_ADMIN_GROWTH_RATE_KEY";

export default function useGetReportAdminGrowthrate() {
  return useQuery({
    queryKey: [GET_REPORT_ADMIN_GROWTH_RATE()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsAdminLowestGrowthRate();
      return data;
    },
    keepPreviousData: true
  });
}
