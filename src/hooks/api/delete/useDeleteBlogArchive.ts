import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_BLOGS_PUBLISH_LIST } from "../get/useGetBlogsPublishList";

const useDeleteBlogArchiveKey = () => "DELETE_BLOG_ARCHIVE_KEY";

export default function useDeleteBlogArchive() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteBlogArchiveKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.deleteApiEventsArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_PUBLISH_LIST()]);
    }
  });
}
