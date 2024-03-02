import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_FORUMS_COUNT = () => "GET_REPORT_FORUMS_COUNT_KEY";

export default function useGetReportForumsCount() {
  return useQuery({
    queryKey: [GET_REPORT_FORUMS_COUNT()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsForumsCount();
      return data;
    },
    keepPreviousData: true
  });
}
