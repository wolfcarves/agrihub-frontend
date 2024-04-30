import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmEventsService,
  UpdateCommunityEventFormData
} from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";

const usePutCommunityFarmEventsUpdateKey = () =>
  "USE_COMMUNITY_FARM_EVENT_UPDATE_KEY";
type DataSchema = {
  id: string;
  formData: UpdateCommunityEventFormData;
};
export default function usePutCommunityFarmEventsUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutCommunityFarmEventsUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmEventsService.putApiCommunityFarmEventUpdate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_LIST()]);
    }
  });
}
