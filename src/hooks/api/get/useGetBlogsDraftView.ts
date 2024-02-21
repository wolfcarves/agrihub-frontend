import { useQuery } from "@tanstack/react-query";
import { BlogsService, EventsService } from "@api/openapi";

export const GET_BLOGS_DRAFT_VIEW = () => "GET_BLOGS_DRAFT_VIEW_KEY";

export default function useGetBlogsDraftView(id: string) {
  return useQuery({
    queryKey: [GET_BLOGS_DRAFT_VIEW()],
    queryFn: async () => {
      const data = await BlogsService.getApiBlogsView({ id });
      return data;
    }
  });
}
