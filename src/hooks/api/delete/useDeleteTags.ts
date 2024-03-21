import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TagsService } from "@api/openapi";
import { useGetTagsQueryKey } from "../get/useGetTagsQuery";

const useDeleteTagsKey = () => "DELETE_TAGS_KEY";

export default function useDeleteTags() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteTagsKey()], {
    async mutationFn(id: string) {
      const response = await TagsService.deleteApiTags({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([useGetTagsQueryKey()]);
    }
  });
}
