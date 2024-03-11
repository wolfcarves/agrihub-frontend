import { useQuery } from "@tanstack/react-query";
import { FarmService } from "../../../api/openapi";

export const GET_FARM_ARCHIVE_LIST_QUERY = () => "GET_FARM_ARCHIVE_LISTS_KEY";
interface ApplicationsParams {
  search?: string;
  page?: string;
  filter?:
    | "District 1"
    | "District 2"
    | "District 3"
    | "District 4"
    | "District 5"
    | "District 6"
    | undefined;
  perpage?: string;
}
export default function useGetFarmArchiveListQuery(data: ApplicationsParams) {
  return useQuery({
    queryKey: [GET_FARM_ARCHIVE_LIST_QUERY(), ...[data]],
    queryFn: async () => {
      const response = await FarmService.getApiFarmCommunityFarmArchived(data);
      return response;
    }
  });
}
