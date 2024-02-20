import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";

export const GET_FARM_MEMBERS = () => "GET_FARM_MEMBERS_KEY";
interface MembersParams {
  search?: string;
  page?: string;
  filter?: string;
  perpage?: string;
}
export default function useGetFarmMembersQuery(data: MembersParams) {
  return useQuery({
    queryKey: [GET_FARM_MEMBERS(), ...Object.values(data)],
    queryFn: async () => {
      const response = await FarmService.getApiFarmFarmerMembers(data);

      return response;
    }
  });
}
