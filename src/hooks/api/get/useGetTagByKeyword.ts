import { useQuery } from "@tanstack/react-query";
import { TagsService } from "@api/openapi";

export const GET_TAG_BY_KEYWORD = (key: string) => ["GET_TAG_BY_KEYWORD", key];

export default function useGetTagByKeyWord(searchKeyword: string) {
  return useQuery(GET_TAG_BY_KEYWORD(searchKeyword), {
    queryFn: async () => {
      const response = await TagsService.getApiTagsSearch(searchKeyword);

      return response;
    }
  });
}
