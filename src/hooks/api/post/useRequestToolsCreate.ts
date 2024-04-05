import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService, NewToolRequest } from "@api/openapi";
import { GET_REQUEST_TOOLS_LIST } from "../get/useGetRequestToolListAllQuery";

const useRequestToolsCreateKey = () => "CREATE_REQUEST_TOOLS_KEY";

type DataSchema = {
  requestBody: NewToolRequest;
};

export default function useRequestToolsCreate() {
  const queryClient = useQueryClient();

  return useMutation([useRequestToolsCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response = await FarmRequestService.postApiRequestToolRequest(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_REQUEST_TOOLS_LIST()]
      });
    }
  });
}
