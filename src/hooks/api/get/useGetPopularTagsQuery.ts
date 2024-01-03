import { useQuery } from "@tanstack/react-query";
import { TagsService } from "../../../api/openapi";

export const GET_TAGS_KEY = () => "GET_TAGS_KEY";

export default function useGetPopularTagsQuery() {
  return useQuery({
    queryKey: [GET_TAGS_KEY()],
    queryFn: async () => {
      const data = await TagsService.getApiTags({});

      return data;
    }
  });
}
