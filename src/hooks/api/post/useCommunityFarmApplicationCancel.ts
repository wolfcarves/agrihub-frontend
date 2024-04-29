import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmService, FarmService } from "@api/openapi";
import { GET_FARM_CHECK_EXISTING_APPLICATION_KEY } from "../get/useGetFarmCheckExistingApplication";
import { GET_COMMUNITY_FARM_CHECK_EXISTING_APPLICATION_KEY } from "../get/useGetCommunityFarmCheckExisting";

const useCommunityFarmApplicationCancelKey = () =>
  "COMMUNITY_FARM_CANCEL_APPLICATION_KEY";

export default function useCommunityFarmApplicationCancel() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmApplicationCancelKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmService.deleteApiCommunityFarmMemberApplicationCancel(
          { id }
        );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_COMMUNITY_FARM_CHECK_EXISTING_APPLICATION_KEY()]
      });
    }
  });
}
