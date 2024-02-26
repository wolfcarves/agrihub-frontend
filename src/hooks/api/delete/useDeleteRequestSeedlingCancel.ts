import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
import { GET_REQUEST_SEEDLING_LIST_ALL } from "../get/useGetRequestSeedlingListAll";
import { GET_REQUEST_SEEDLING_LIST } from "../get/useGetRequestSeedlingList";

const useDeleteRequestSeedlingCancelKey = () =>
  "DELETE_SEEDLING_REQUEST_CANCEL_KEY";

export default function useDeleteRequestSeedlingCancel() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteRequestSeedlingCancelKey()], {
    async mutationFn(id: string) {
      const response = await FarmRequestService.deleteApiRequestSeedlingCancel({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_REQUEST_SEEDLING_LIST()]);
    }
  });
}
