import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService, NewSeedlingRequest } from "@api/openapi";
import { GET_REQUEST_SEEDLING_LIST } from "../get/useGetRequestSeedlingList";

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
      queryClient.invalidateQueries({
        queryKey: [GET_REQUEST_SEEDLING_LIST()]
      });
    }
  });
}
