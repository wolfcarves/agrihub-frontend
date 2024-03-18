import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_COMMON_OVERVIEW = () =>
  "GET_REPORT_COMMON_OVERVIEW_KEY";

export default function useGetReportsCommonOverview() {
  return useQuery({
    queryKey: [GET_REPORT_COMMON_OVERVIEW()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsCommonOverview();
      return data;
    },
    keepPreviousData: true
  });
}
