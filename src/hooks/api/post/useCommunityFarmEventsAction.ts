import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmEventsService, EventAction } from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";
import { GET_COMMUNITY_FARM_EVENT_VIEW } from "../get/useGetCommunityFarmEventView";

const useCommunityFarmEventsActionKey = () =>
  "USE_COMMUNITY_FARM_EVENT_ACTION_KEY";
interface DataSchema {
  id: string;
  requestBody: EventAction;
}
export default function useCommunityFarmEventsAction() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmEventsActionKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmEventsService.postApiCommunityFarmEventAction(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_LIST()]);
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_VIEW()]);
    }
  });
}
