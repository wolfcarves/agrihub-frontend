import { useQuery } from "@tanstack/react-query";
import { TagsService } from "@api/openapi";

export const GET_POPULAR_TAGS = () => "GET_POPULAR_TAGSAWDAWD";

export default function useGetPopularTagsQuery() {
  return useQuery({
    queryKey: [GET_POPULAR_TAGS()],
    queryFn: async () => {
      const data = await TagsService.getApiTags1({});

      return data;
    }
  });
}
