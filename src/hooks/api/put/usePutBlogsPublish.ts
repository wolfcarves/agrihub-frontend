import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_PUBLISH_LIST } from "../get/useGetBlogsPublishListQuery";

const usePutBlogsPublishKey = () => "PUT_BLOGS_PUBLISH_KEY";

export default function usePutBlogsPublish() {
  const queryClient = useQueryClient();

  return useMutation([usePutBlogsPublishKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.putApiBlogsPublish({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_PUBLISH_LIST()]);
    }
  });
}
