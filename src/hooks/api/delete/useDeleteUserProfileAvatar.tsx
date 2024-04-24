import { UserService } from "@api/openapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_USER_PROFILE } from "../get/useGetUserProfileQuery";
import { GET_MY_PROFILE_KEY } from "../get/useGetMyProfileQuery";

export default function useDeleteUserProfileAvatar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["useDeleteUserProfileAvatarKey"],
    mutationFn: async () => {
      await UserService.deleteApiUserDeleteAvatar();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_USER_PROFILE()]
      });

      queryClient.invalidateQueries({
        queryKey: [GET_MY_PROFILE_KEY()]
      });
    }
  });
}
