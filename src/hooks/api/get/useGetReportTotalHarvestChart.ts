import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_TOTAL_HARVEST_CHART = () =>
  "GET_REPORT_TOTAL_HARVEST_CHART_KEY";
type hookProps = {
  id: string;
  start: string;

  end: string;

  year: string;
};
export default function useGetReportTotalHarvestChart(data: hookProps) {
  return useQuery({
    queryKey: [GET_REPORT_TOTAL_HARVEST_CHART(), ...[data]],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsFarmerGraphTotalHarvest(data);
      return response;
    },
    keepPreviousData: true
  });
}
