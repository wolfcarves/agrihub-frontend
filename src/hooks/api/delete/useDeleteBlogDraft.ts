import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_LIST } from "../get/useGetEventsDraftList";
import { GET_BLOGS_DRAFT_LIST } from "../get/useGetBlogsDraftList";

const useDeleteBlogDraftKey = () => "DELETE_BLOGS_DRAFT_KEY";

export default function useDeleteBlogDraft() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteBlogDraftKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.deleteApiBlogsRemoveDraft({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_DRAFT_LIST()]);
    }
  });
}
