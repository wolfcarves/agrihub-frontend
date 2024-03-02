import { ReportsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

interface GraphProps {
  year?: string;
  start?: string;
  end?: string;
}

const GET_REPORT_GROWTH_RATE_MONTHLY = () =>
  "GET_REPORT_GROWTH_RATE_MONTHLY_KEY";

export default function useGetReportGrowthRateMonthly(data: GraphProps) {
  return useQuery({
    queryKey: [GET_REPORT_GROWTH_RATE_MONTHLY(), data],
    queryFn: async () => {
      const response =
        await ReportsService.getApiReportsAdminGrowthRateMonthly(data);
      return response;
    }
  });
}
