import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogsService, NewLearningTags } from "@api/openapi";
import { GET_BLOGS_DRAFT_VIEW } from "../get/useGetBlogsDraftView";

const useBlogsCreateImageKey = () => "BLOGS_CREATE_IMAGE_KEY";

type DataSchema = {
  id: string;
  formData: {
    image?: Blob;
  };
};

export default function useBlogsCreateImage() {
  const queryClient = useQueryClient();

  return useMutation([useBlogsCreateImageKey()], {
    async mutationFn(data: DataSchema) {
      const response = await BlogsService.postApiBlogsCreateImage(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BLOGS_DRAFT_VIEW()] });
    }
  });
}
