import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

export const GET_USER_PROFILE_KEY = (username: string) => [
  "GET_USER_PROFILE_KEY",
  username
];

export default function useGetUserProfileQuery(username: string) {
  return useQuery(GET_USER_PROFILE_KEY(username), {
    queryFn: async () => {
      const response = await UserService.getApiUserProfile(username);

      return response;
    }
  });
}
