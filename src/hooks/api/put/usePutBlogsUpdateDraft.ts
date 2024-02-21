import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, UpdateBlogRequest } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const usePutBlogsUpdateDraftKey = () => "PUT_BLOGS_UPDATE_DRAFT_KEY";

type DataSchema = {
  id: string;
  requestBody: UpdateBlogRequest;
};

export default function usePutBlogsUpdateDraft() {
  const queryClient = useQueryClient();

  return useMutation([usePutBlogsUpdateDraftKey()], {
    async mutationFn(data: DataSchema) {
      const response = await BlogsService.putApiBlogsUpdateDraft(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
