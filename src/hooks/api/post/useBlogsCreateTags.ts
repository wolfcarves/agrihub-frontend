import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, CreateEventTagsRequest } from "@api/openapi";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const useBlogsCreateTagsKey = () => "BLOGS_CREATE_TAGS_KEY";

type DataSchema = {
  id: string;
  requestBody: CreateEventTagsRequest;
};

export default function useBlogsCreateTags() {
  const queryClient = useQueryClient();

  return useMutation([useBlogsCreateTagsKey()], {
    async mutationFn(data: DataSchema) {
      const response = await BlogsService.postApiBlogsCreateTags(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
