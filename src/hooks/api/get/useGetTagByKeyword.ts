import { useQuery } from "@tanstack/react-query";
import { TagsService } from "@api/openapi";

export const GET_TAG_BY_KEYWORD = () => "GET_TAG_BY_KEYWORD";

export default function useGetTagByKeyWord(key: string) {
  return useQuery({
    queryKey: [GET_TAG_BY_KEYWORD(), key],
    queryFn: async () => {
      const response = await TagsService.getApiTagsSearch({
        key
      });

      return response;
    }
  });
}
