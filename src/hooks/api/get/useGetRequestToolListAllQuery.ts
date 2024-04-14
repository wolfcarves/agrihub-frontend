import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
export const GET_REQUEST_TOOLS_LIST = () => "GET_REQUEST_TOOLS_LIST_KEY";
interface HookParams {
  search?: string;
  page?: string;
  perpage?: string;
  filter?:
    | "pending"
    | "accepted"
    | "communicating"
    | "rejected"
    | "forwarded"
    | "completed";
  farmid?: string;
}
export default function useGetRequestToolListAllQuery(data: HookParams) {
  return useQuery({
    queryKey: [GET_REQUEST_TOOLS_LIST(), ...[data]],
    queryFn: async () => {
      const response = await FarmRequestService.getApiRequestToolRequest(data);
      return response;
    },
    keepPreviousData: true
  });
}
