import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

export const VIEW_FARM_APPLICATION_KEY = () => "VIEW_FARM_APPLICATION_KEY";

export default function useGetFarmApplication(id: string) {
  return useQuery({
    queryKey: [VIEW_FARM_APPLICATION_KEY(), id],
    queryFn: async () => {
      const data = await FarmService.getApiFarmApplications1({ id });

      return data;
    }
  });
}
