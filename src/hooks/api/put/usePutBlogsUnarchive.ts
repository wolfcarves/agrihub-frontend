import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";
import { GET_BLOGS_PUBLISH_LIST } from "../get/useGetBlogsPublishList";

const usePutBlogsUnarchiveKey = () => "PUT_BLOGS_UNARCHIEVE_KEY";

export default function usePutBlogsUnarchive() {
  const queryClient = useQueryClient();

  return useMutation([usePutBlogsUnarchiveKey()], {
    async mutationFn(id: string) {
      const response = await BlogsService.putApiBlogsUnarchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_BLOGS_PUBLISH_LIST()]);
    }
  });
}
