import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, EventsService } from "@api/openapi";
import { GET_BLOGS_PUBLISH_LIST } from "../get/useGetBlogsPublishListQuery";

const useDeleteBlogArchiveKey = () => "DELETE_BLOG_ARCHIVE_KEY";

export default function useDeleteBlogArchive() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteBlogArchiveKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.deleteApiBlogsArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_PUBLISH_LIST()]);
    }
  });
}
