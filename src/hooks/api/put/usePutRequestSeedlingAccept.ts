import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcceptSeedlingRequest, FarmRequestService } from "@api/openapi";
import { GET_REQUEST_SEEDLING_LIST_ALL } from "../get/useGetRequestSeedlingListAll";

const usePutRequestSeedlingAcceptKey = () => "PUT_REQUEST_SEEDLING_ACCEPT_KEY";

type DataSchema = {
  id: string;
  requestBody: AcceptSeedlingRequest;
};

export default function usePutRequestSeedlingAccept() {
  const queryClient = useQueryClient();

  return useMutation([usePutRequestSeedlingAcceptKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await FarmRequestService.putApiRequestSeedlingAccept(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_REQUEST_SEEDLING_LIST_ALL()]
      });
    }
  });
}
