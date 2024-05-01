import { UserService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserGetTagsKey } from "../get/useUserGetTags";

export default function useUserUpdateTags() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["useUserUpdateTagsKey"],
    mutationFn: async (tags: string | string[] | undefined) => {
      const response = await UserService.putApiUserUpdateTags({
        requestBody: {
          tags
        }
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [useUserGetTagsKey()] });
    }
  });
}
