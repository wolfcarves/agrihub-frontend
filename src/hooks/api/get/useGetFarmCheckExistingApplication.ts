import { useQuery } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";

export const GET_FARM_CHECK_EXISTING_APPLICATION_KEY = () => "GET_FARM_EXISTING_APPLICATION_KEY";

export default function useGetFarmCheckExistingApplication() {
  return useQuery({
    queryKey: [GET_FARM_CHECK_EXISTING_APPLICATION_KEY()],
    queryFn: async () => {
      const response = await FarmService.getApiFarmApplicationsCheckExisting();

      return response;
    }
  });
}