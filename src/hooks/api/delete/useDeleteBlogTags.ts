import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const useDeleteBlogTagsKey = () => "BLOGS_REMOVE_TAGS_KEY";

export default function useDeleteBlogTags() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteBlogTagsKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.deleteApiBlogsRemoveTags({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
