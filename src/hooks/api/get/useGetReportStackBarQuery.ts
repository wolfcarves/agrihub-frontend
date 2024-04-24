import { data } from "./../../../pages/admin/users/table/columns-user";
import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../../../api/openapi";
export const GET_REPORT_STACK_BAR = () => "GET_REPORT_STACK_BAR_KEY";
interface GraphProps {
  month?: string;
  year?: string;
}
export default function useGetReportStackBarQuery(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_STACK_BAR(), data.month, data.year],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsFarmerGraphStackedBar(data);
      return response;
    },
    keepPreviousData: true
  });
}
