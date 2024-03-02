import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

type HookParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: string;
};
export const GET_USER_ACTIVE_LIST = () => "GET_USER_ACTIVE_LIST_KEY";
export default function useGetUserActiveList(data: HookParams) {
  return useQuery({
    queryKey: [GET_USER_ACTIVE_LIST(), ...[data]],
    queryFn: async () => {
      const response = await UserService.getApiUserList(data);
      return response;
    }
  });
}
