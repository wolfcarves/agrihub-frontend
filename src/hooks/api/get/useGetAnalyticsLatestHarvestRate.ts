import { useQuery } from "@tanstack/react-query";
import { AnalyticsService } from "@api/openapi";

export const GET_ANALYTICS_LATEST_HARVEST_RATE = () =>
  "GET_ANALYTICS_LATEST_HARVEST_RATE_KEY";

export default function useGetAnalyticsLatestHarvestRate(id: string) {
  return useQuery({
    queryKey: [GET_ANALYTICS_LATEST_HARVEST_RATE(), id],
    queryFn: async () => {
      const data = await AnalyticsService.getApiAnalyticsLatestHarvestRate({
        id
      });
      return data;
    }
  });
}
