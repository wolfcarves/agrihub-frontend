import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
import { GET_REQUEST_TOOLS_LIST } from "../get/useGetRequestToolListAllQuery";

const useDeleteRequestToolsCancelKey = () => "DELETE_TOOL_REQUEST_CANCEL_KEY";

export default function useDeleteRequestToolsCancel() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteRequestToolsCancelKey()], {
    async mutationFn(id: string) {
      const response = await FarmRequestService.postApiRequestToolRequestCancel(
        {
          id
        }
      );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_REQUEST_TOOLS_LIST()]);
    }
  });
}
