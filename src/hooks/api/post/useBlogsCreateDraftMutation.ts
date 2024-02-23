import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const useBlogsCreateDraftMutationKey = () => "BLOGS_CREATE_DRAFT_MUTATION_KEY";

type MutationData = {
  title: string;
};

export default function useBlogsCreateDraftMutation() {
  const queryClient = useQueryClient();

  return useMutation([useBlogsCreateDraftMutationKey()], {
    async mutationFn(requestBody: MutationData) {
      const { title } = requestBody;
      const response = await BlogsService.postApiBlogsCreateDraft({
        requestBody: {
          title
        }
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
