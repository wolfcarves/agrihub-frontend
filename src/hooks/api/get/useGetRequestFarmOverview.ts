import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "../../../api/openapi";
export const GET_REQUEST_FARM_OVERVIEW = () => "GET_REQUEST_FARM_OVERVIEW_KEY";

export default function useGetRequestFarmOverview() {
  return useQuery({
    queryKey: [GET_REQUEST_FARM_OVERVIEW()],
    queryFn: async () => {
      const data = await FarmRequestService.getApiReportsFarmsOverview();
      return data;
    },
    keepPreviousData: true
  });
}
