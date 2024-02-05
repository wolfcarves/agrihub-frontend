import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../../api/openapi";

export const GET_USER_MEMBER_LIST = () => "GET_USER_MEMBER_LIST_KEY";
interface UserMemberParams {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: string;
}
export default function useGetUsersMember(data: UserMemberParams) {
  return useQuery({
    queryKey: [GET_USER_MEMBER_LIST(), ...[data]],
    queryFn: async () => {
      const response = await UserService.getApiUserSearchMembers(data);

      return response;
    },
    keepPreviousData: true
  });
}
