import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_GROWTH_RATE_DISTRIBUTION = () =>
  "GET_REPORT_GROWTH_RATE_DISTRIBUTION_KEY";
interface GraphProps {
  month: string;
  limit?: string;
}
export default function useGetReportGrowthRateDistribution(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_GROWTH_RATE_DISTRIBUTION(), data.month, data.limit],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAnalyticsGrowthRateDistribution(data);
      return response;
    },
    keepPreviousData: true
  });
}
