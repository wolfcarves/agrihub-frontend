import { useQuery } from "@tanstack/react-query";
import { AuthService } from "@api/openapi";

export const GET_MY_PROFILE_KEY = () => "GET_MY_PROFILE_KEY";

export default function useGetMyProfileQuery() {
  return useQuery({
    queryKey: [GET_MY_PROFILE_KEY()],
    queryFn: async () => {
      const response = await AuthService.getApiAuthMe();

      return response;
    }
  });
}
