import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

export const VIEW_FARM_CROPS_KEY = () => "GET_VIEW_FARM_KEY";

export default function useGetFarmCropsQuery(id: string) {
  return useQuery({
    queryKey: [VIEW_FARM_CROPS_KEY(), id],
    queryFn: async () => {
      const data = await FarmService.getApiFarmCommunityFarmCrops({ id });

      return data;
    }
  });
}
