import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";
export const GET_REQUEST_SEEDLING_LIST = () => "GET_REQUEST_SEEDLING_LIST_KEY";

export default function useGetRequestSeedlingList(id: string) {
  return useQuery({
    queryKey: [GET_REQUEST_SEEDLING_LIST(), id],
    queryFn: async () => {
      const data = await FarmRequestService.getApiRequestSeedlingList({ id });
      return data;
    },
    keepPreviousData: true
  });
}
