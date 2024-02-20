import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";

export const GET_FARMER_INVITATION = () => "GET_FARMER_INVITATION";

export default function useGetFarmerInvitation({ id }: { id: string }) {
  return useQuery({
    queryKey: [GET_FARMER_INVITATION()],
    queryFn: async () => {
      const data = await FarmService.getApiFarmFarmerInvitationView({ id });
      return data;
    }
  });
}
