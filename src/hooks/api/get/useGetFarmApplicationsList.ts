import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";

export const GET_FARM_APPLICATION = () => "GET_FARM_APPLICATION_KEY";
interface ApplicationsParams {
  search?: string;
  page?: string;
  filter?: "pending" | "rejected" | "approved";
  perpage?: string;
}
export default function useGetFarmApplicationList(data: ApplicationsParams) {
  return useQuery({
    queryKey: [GET_FARM_APPLICATION(), data.page, data.filter, data.perpage],
    queryFn: async () => {
      const response = await FarmService.getApiFarmApplications(data);

      return response;
    }
  });
}
