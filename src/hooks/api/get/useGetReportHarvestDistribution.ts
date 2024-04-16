import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_HARVEST_DISTRIBUTION = () =>
  "GET_REPORT_HARVEST_DISTRIBUTION_KEY";
interface GraphProps {
  month: string;
  limit?: string;
}
export default function useGetReportHarvestDistribution(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_HARVEST_DISTRIBUTION(), data.month, data.limit],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAnalyticsHarvestDistribution(data);
      return response;
    },
    keepPreviousData: true
  });
}
