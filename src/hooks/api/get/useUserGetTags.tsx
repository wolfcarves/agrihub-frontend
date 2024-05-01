import { UserService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

export const useUserGetTagsKey = () => "useUserGetTagsKey";

export default function useUserGetTags() {
  return useQuery({
    queryKey: [useUserGetTagsKey()],
    queryFn: async () => {
      const response = await UserService.getApiUserTags();

      return response;
    }
  });
}
