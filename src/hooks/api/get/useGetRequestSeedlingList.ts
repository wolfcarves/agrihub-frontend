import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
export const GET_REQUEST_SEEDLING_LIST = () => "GET_REQUEST_SEEDLING_LIST_KEY";

export default function useGetRequestSeedlingList() {
  return useQuery({
    queryKey: [GET_REQUEST_SEEDLING_LIST()],
    queryFn: async () => {
      const data = await FarmRequestService.getApiRequestSeedlingList();
      return data;
    },
    keepPreviousData: true
  });
}
