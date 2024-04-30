import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";

const useDeleteCommunityFarmEventsKey = () =>
  "DELETE_COMMUNITY_FARM_EVENT_LIST_KEY";

export default function useDeleteCommunityFarmEvents() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityFarmEventsKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmEventsService.deleteApiCommunityFarmEventDelete({
          id
        });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_COMMUNITY_FARM_EVENT_LIST()]
      });
    }
  });
}
