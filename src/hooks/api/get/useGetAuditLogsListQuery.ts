import { useQuery } from "@tanstack/react-query";
import {
  AuditLogsService,
  BlogsService,
  EventsService
} from "../../../api/openapi";

export const GET_AUDIT_LOGS_LIST = () => "GET_AUTDIT_LOGS_LIST_KEY";

export default function useGetAuditLogsListQuery(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_AUDIT_LOGS_LIST(), search, page, perpage],
    queryFn: async () => {
      const data = await AuditLogsService.getApiAuditLogs({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
