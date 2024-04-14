import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService, UpdateToolRequestStatus } from "@api/openapi";
import { GET_REQUEST_TOOLS_LIST } from "../get/useGetRequestToolListAllQuery";

const usePutRequestToolUpdateKey = () => "PUT_REQUEST_TOOLS_KEY";

type DataSchema = {
  id: string;
  requestBody: UpdateToolRequestStatus;
};

export default function usePutRequestToolUpdate() {
  const queryClient = useQueryClient();

  return useMutation([usePutRequestToolUpdateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await FarmRequestService.postApiRequestToolRequestUpdate(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_REQUEST_TOOLS_LIST()]
      });
    }
  });
}
