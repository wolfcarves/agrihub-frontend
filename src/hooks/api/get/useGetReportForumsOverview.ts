import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_FORUMS_OVERVIEW = () =>
  "GET_REPORT_FORUMS_OVERVIEW_KEY";
interface GraphProps {
  year?: string;
}
export default function useGetReportForumsOverview(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_FORUMS_OVERVIEW(), data],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsForumsOverview(data);
      return response;
    },
    keepPreviousData: true
  });
}
