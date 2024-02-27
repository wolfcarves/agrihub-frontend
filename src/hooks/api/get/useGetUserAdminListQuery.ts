import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

type HookParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "active" | "banned";
};
export const GET_USER_ADMIN_LIST = () => "GET_USER_ADMIN_LIST_KEY";
export default function useGetUserAdminListQuery(data: HookParams) {
  return useQuery({
    queryKey: [GET_USER_ADMIN_LIST(), ...[data]],
    queryFn: async () => {
      const response = await UserService.getApiUserAdmins(data);
      return response;
    }
  });
}
