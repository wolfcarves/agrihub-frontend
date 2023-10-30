import { useQuery } from "@tanstack/react-query";
import { AuthService } from "@api/openapi";

export default function useGetMyProfile() {
  return useQuery(["GET_MY_PROFILE_KEY"], {
    queryFn: async () => {
      const response = await AuthService.getApiAuthMe();

      return response;
    }
  });
}
