import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

export const GET_USER_PROFILE_DETAILS = () => "GET_USER_PROFILE_DETAILS_KEY";

export default function useGetUserProfileQuery(username: string) {
  return useQuery({
    queryKey: [GET_USER_PROFILE_DETAILS(), username],
    queryFn: async () => {
      const data = await UserService.getApiUserProfile({ username });

      return data;
    }
  });
}
