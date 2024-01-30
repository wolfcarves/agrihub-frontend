import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_STACK_BAR = () => "GET_REPORT_STACK_BAR_KEY";

export default function useGetReportStackBarQuery() {
  return useQuery({
    queryKey: [GET_REPORT_STACK_BAR()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsFarmerGraphStackedBar();
      return data;
    },
    keepPreviousData: true
  });
}
