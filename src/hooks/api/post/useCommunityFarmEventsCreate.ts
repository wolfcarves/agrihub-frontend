import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommunityFarmEventsService,
  CreateCommunityEventFormData
} from "@api/openapi";
import { GET_COMMUNITY_FARM_EVENT_LIST } from "../get/useGetCommunityFarmEventList";

const useCommunityFarmEventsCreateKey = () =>
  "USE_COMMUNITY_FARM_EVENT_CREATE_KEY";
type DataSchema = {
  formData: CreateCommunityEventFormData;
};
export default function useCommunityFarmEventsCreate() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmEventsCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmEventsService.postApiCommunityFarmEventCreate(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_EVENT_LIST()]);
    }
  });
}
