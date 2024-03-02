import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

type HookParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "active" | "banned";
};
export const GET_USER_BANNED_LIST = () => "GET_USER_BANNED_LIST_KEY";
export default function useGetUserBannedList(data: HookParams) {
  return useQuery({
    queryKey: [GET_USER_BANNED_LIST(), ...[data]],
    queryFn: async () => {
      const response = await UserService.getApiUserBanned(data);
      return response;
    }
  });
}
