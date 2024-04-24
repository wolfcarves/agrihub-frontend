import { data } from "./../../../pages/admin/users/table/columns-user";
import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_GROWTH_CHART = () => "GET_REPORT_GROWTH_CHART_KEY";
interface GraphProps {
  month?: string;
  year?: string;
}
export default function useGetReportGrowthChart(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_GROWTH_CHART(), data.month, data.year],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsFarmerGraphGrowthHarvest(data);
      return response;
    },
    keepPreviousData: true
  });
}
