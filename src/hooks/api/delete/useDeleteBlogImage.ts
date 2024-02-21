import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const useDeleteBlogImageKey = () => "BLOGS_REMOVE_IMAGE_KEY";

export default function useDeleteBlogImage() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteBlogImageKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.deleteApiBlogsRemoveImage({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
