import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";
import { GET_COMMUNITY_FARM_EVENT_VIEW } from "../get/useGetCommunityFarmEventView";

const useDeleteCommunityFarmEventsEngagementKey = () =>
  "DELETE_COMMUNITY_FARM_EVENTS_ENGAGEMENT_KEY";

export default function useDeleteCommunityFarmEventsEngagement() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityFarmEventsEngagementKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmEventsService.deleteApiCommunityFarmRemoveEngagement(
          {
            id
          }
        );

      return response;
    },

    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_LIST()]);
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_VIEW()]);
    }
  });
}
