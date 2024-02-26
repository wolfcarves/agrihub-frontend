import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
import { GET_REQUEST_SEEDLING_LIST_ALL } from "../get/useGetRequestSeedlingListAll";

const useDeleteRequestSeedlingRejectKey = () =>
  "DELETE_REQUEST_SEEDLING_REJECT_KEY";

export default function useDeleteRequestSeedlingReject() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteRequestSeedlingRejectKey()], {
    async mutationFn(id: string) {
      const response = await FarmRequestService.deleteApiRequestSeedlingReject({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_REQUEST_SEEDLING_LIST_ALL()]);
    }
  });
}
