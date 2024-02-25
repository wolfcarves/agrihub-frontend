import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

export const GET_USER_PROFILE = () => "GET_USER_PROFILE_KEY";

export default function useGetUserProfileQuery(username: string) {
  return useQuery({
    queryKey: [GET_USER_PROFILE(), username],
    queryFn: async () => {
      const data = await UserService.getApiUserProfile({ username });

      return data;
    }
  });
}
