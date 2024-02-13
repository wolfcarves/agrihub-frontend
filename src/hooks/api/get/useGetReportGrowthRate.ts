import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_GROWTH_RATE = () => "GET_REPORT_GROWTH_RATE_KEY";

export default function useGetReportGrowthRate() {
  return useQuery({
    queryKey: [GET_REPORT_GROWTH_RATE()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsCropGrowthRate();
      return data;
    },
    keepPreviousData: true
  });
}
