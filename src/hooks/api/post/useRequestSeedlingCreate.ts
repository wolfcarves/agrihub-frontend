import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FarmRequestService,
  LearningMaterialsService,
  NewLearningCredits,
  NewSeedlingRequest
} from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const useRequestSeedlingCreateKey = () => "CREATE_REQUEST_SEEDLING_KEY";

type DataSchema = {
  requestBody: NewSeedlingRequest;
};

export default function useRequestSeedlingCreate() {
  const queryClient = useQueryClient();

  return useMutation([useRequestSeedlingCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await FarmRequestService.postApiRequestSeedling(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_VIEW()] });
    }
  });
}
