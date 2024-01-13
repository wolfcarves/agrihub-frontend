import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";
export const GET_FARM = () => "GET_FARM_KEY";

export default function useGetFarms(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_FARM(), page, search],
    queryFn: async () => {
      const data = await FarmService.getApiFarm(search, page, perpage);
      return data;
    },
    keepPreviousData: true
  });
}
