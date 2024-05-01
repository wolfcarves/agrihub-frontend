import { TagsService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

export default function useGetTagById(id: string) {
  return useQuery({
    queryKey: ["useGetUserTagByIdKey"],
    queryFn: async () => {
      const response = await TagsService.getApiTags({
        id: id ?? ""
      });

      return response;
    }
  });
}
