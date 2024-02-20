import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

export const VIEW_FARM_VIEW_KEY = () => "GET_FARM_DETAILS_KEY";

export default function useGetFarmViewQuery(id: string) {
  return useQuery({
    queryKey: [VIEW_FARM_VIEW_KEY(), id],
    queryFn: async () => {
      const data = await FarmService.getApiFarmCommunityFarm1({ id });

      return data;
    }
  });
}
