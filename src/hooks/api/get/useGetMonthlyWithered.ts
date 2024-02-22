  import { ReportsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

interface HarvestedWithered {
  year?: string;
  start?: string;
  end?: string;
}

const GET_HARVESTED_WITHERED = () => "GET_HARVESTED_WITHERED_KEY";

export default function useGetMonthlyWithered(data: HarvestedWithered) {
  return useQuery({
    queryKey: [GET_HARVESTED_WITHERED(), data],
    queryFn: async () => {
      const response = await ReportsService.getApiReportsAdminGraphHarvestedWithered(data);
      return response;
    }
  });
}
