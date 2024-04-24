import { UserService, UserUpdateProfile } from "@api/openapi";
import { GET_MY_PROFILE_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import { GET_USER_PROFILE } from "@hooks/api/get/useGetUserProfileQuery";

import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateProfileParams {
  id: string;
  formData: UserUpdateProfile;
}

export default function useUpdateUserProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["UDPATE_USER_PROFILE_KEY"],
    mutationFn: async (data: UpdateProfileParams) => {
      const response = await UserService.putApiUserProfile(data);

      return response;
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
