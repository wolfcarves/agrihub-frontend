import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";
export const GET_REPORT_ADMIN_GROWTH_RATE = () =>
  "GET_REPORT_ADMIN_GROWTH_RATE_KEY";
interface GraphProps {
  order?: "asc" | "desc" | undefined;
}
export default function useGetReportAdminGrowthrate(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_ADMIN_GROWTH_RATE(), data],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAdminLowestGrowthRate(data);
      return response;
    },
    keepPreviousData: true
  });
}
