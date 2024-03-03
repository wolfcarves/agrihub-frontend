import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_RESOURCE_COUNT = () => "GET_REPORT_RESOURCE_COUNT_KEY";

export default function useGetReportResourceCount() {
  return useQuery({
    queryKey: [GET_REPORT_RESOURCE_COUNT()],
    queryFn: async () => {
      const data = await ReportsService.getApiReportsAdminResourcesCount();
      return data;
    },
    keepPreviousData: true
  });
}
