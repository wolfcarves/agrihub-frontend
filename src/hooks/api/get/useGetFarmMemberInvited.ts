import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";

export const GET_FARM_MEMBERS_INVITED = () => "GET_FARM_MEMBERS_INVITED_KEY";
interface InvitedParams {
  search?: string;
  page?: string;
  filter?: string;
  perpage?: string;
}
export default function useGetFarmMemberInvited(data: InvitedParams) {
  return useQuery({
    queryKey: [GET_FARM_MEMBERS_INVITED(), ...Object.values(data)],
    queryFn: async () => {
      const response = await FarmService.getApiFarmFarmerInvitationList(data);

      return response;
    }
  });
}
