import { AuthService } from "@api/openapi";
import { useQuery } from "@tanstack/react-query";

export default function useGetAuthCheckTokenQuery(token: string) {
  return useQuery({
    queryKey: ["GET_AUTH_CHECK_TOKEN"],
    queryFn: async () => {
      const response = await AuthService.getApiAuthCheckToken({ token });

      return response;
    }
  });
}
