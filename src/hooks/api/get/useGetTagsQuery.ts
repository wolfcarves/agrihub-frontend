import { TagsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

interface TagParams {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: string;
}

const useGetTagsQueryKey = () => "GET_TAGS_KEY";

export default function useGetTagsQuery(data: TagParams) {
  return useQuery({
    queryKey: [useGetTagsQueryKey(), ...[data]],
    queryFn: async () => {
      const response = await TagsService.getApiTags1(data);

      return response;
    }
  });
}
