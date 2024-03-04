import { useQuery } from "@tanstack/react-query";
import { FarmRequestService } from "@api/openapi";

type EventsParams = {
  search?: string | undefined;
  page?: string | undefined;
  perpage?: string | undefined;
  filter?: "" | "pending" | "accepted" | "rejected" | undefined;
};
export const GET_REQUEST_SEEDLING_LIST_ALL = () =>
  "GET_REQUEST_SEEDLING_LIST_ALL_KEY";
export default function useGetRequestSeedlingListAll(data: EventsParams) {
  return useQuery({
    queryKey: [GET_REQUEST_SEEDLING_LIST_ALL(), ...[data]],
    queryFn: async () => {
      const response = await FarmRequestService.getApiRequestSeedlingListAll({
        ...data
      });

      return response;
    }
  });
}
