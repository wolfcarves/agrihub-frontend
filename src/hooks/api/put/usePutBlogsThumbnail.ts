import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const usePutBlogsThumbnailKey = () => "PUT_BLOGS_THUMBNAIL_KEY";

type DataSchema = {
  blogId: string;
  id: string;
};

export default function usePutBlogsThumbnail() {
  const queryClient = useQueryClient();

  return useMutation([usePutBlogsThumbnailKey()], {
    async mutationFn(data: DataSchema) {
      const response = await BlogsService.putApiBlogsThumbnail(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
