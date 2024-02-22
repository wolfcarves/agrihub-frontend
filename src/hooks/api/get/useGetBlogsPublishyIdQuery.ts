import { useQuery } from "@tanstack/react-query";
import { BlogsService } from "@api/openapi";

export const GET_BLOGS_PUBLISH_LIST = () => "GET_BLOGS_PUBLISH_BY_ID_KEY";

export default function useGetBlogsPublishyIdQuery(id: string) {
  return useQuery({
    queryKey: [GET_BLOGS_PUBLISH_LIST(), id],
    queryFn: async () => {
      const response = await BlogsService.getApiBlogsPublished({
        id
      });

      return response;
    },
    keepPreviousData: true
  });
}
