import { useQuery } from "@tanstack/react-query";
import { UserService } from "@api/openapi";

type HookParams = {
  search?: string;
  page?: string;
  perpage?: string;
};
export const GET_USER_REPORT_LIST = () => "GET_USER_REPORT_LIST_KEY";
export default function useGetUserReportList(data: HookParams) {
  return useQuery({
    queryKey: [GET_USER_REPORT_LIST(), ...[data]],
    queryFn: async () => {
      const response = await UserService.getApiUserReported(data);
      return response;
    }
  });
}
