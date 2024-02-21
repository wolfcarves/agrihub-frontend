import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_DRAFT_LIST } from "../get/useGetBlogsDraftList";

const usePutBlogsUnpublishKey = () => "PUT_BLOGS_UNPUBLISH_KEY";

export default function usePutBlogsUnpublish() {
  const queryClient = useQueryClient();

  return useMutation([usePutBlogsUnpublishKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.putApiBlogsUnpublish({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_DRAFT_LIST()]);
    }
  });
}
