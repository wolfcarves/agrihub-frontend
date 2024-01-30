import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "@api/openapi";

export const GET_REPORT_CROP_STATS_KEY = () => "GET_REPORT_CROP_STATS_KEY";

export default function useGetReportCropStatsQuery(name: string) {
  return useQuery({
    queryKey: [GET_REPORT_CROP_STATS_KEY(), name],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsCropStatistics({ name });

      return data;
    }
  });
}
