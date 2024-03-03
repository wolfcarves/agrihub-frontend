import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_RESOURCE_COUNT_DETAILED = () =>
  "GET_REPORT_RESOURCE_COUNT_DETAILED_KEY";

export default function useGetReportResourceCountDetailed() {
  return useQuery({
    queryKey: [GET_REPORT_RESOURCE_COUNT_DETAILED()],
    queryFn: async () => {
      const data =
        await ReportsService.getApiReportsAdminResourcesCountDetailed();
      return data;
    },
    keepPreviousData: true
  });
}
