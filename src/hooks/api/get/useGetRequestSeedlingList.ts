import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
export const GET_REQUEST_SEEDLING_LIST = () => "GET_REQUEST_SEEDLING_LIST_KEY";
interface HookParams {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "pending" | "accepted" | "rejected" | "";
}
export default function useGetRequestSeedlingList(data: HookParams) {
  return useQuery({
    queryKey: [GET_REQUEST_SEEDLING_LIST(), ...[data]],
    queryFn: async () => {
      const response = await FarmRequestService.getApiRequestSeedlingList(data);
      return response;
    },
    keepPreviousData: true
  });
}
