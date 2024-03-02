import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "../../../api/openapi";
export const GET_REQUEST_COUNT_GRAPH = () => "GET_REQUEST_COUNT_GRAPH_KEY";

export default function useGetRequestCountGraph() {
  return useQuery({
    queryKey: [GET_REQUEST_COUNT_GRAPH()],
    queryFn: async () => {
      const data = await FarmRequestService.getApiRequestCount();
      return data;
    },
    keepPreviousData: true
  });
}
