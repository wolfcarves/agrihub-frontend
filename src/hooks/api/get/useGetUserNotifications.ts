import { useQuery } from "@tanstack/react-query";
import { NotificationService } from "../../../api/openapi";
export const GET_USER_NOTIFICATIONS = ({
  search,
  page,
  perpage,
  filter
}: UserNotificationT) => [
  "GET_USER_NOTIFICATIONS",
  search,
  page,
  perpage,
  filter
];

type UserNotificationT = {
  search?: string | undefined;
  page?: string | undefined;
  perpage?: string | undefined;
  filter?: string | undefined;
};

export default function useGetUserNotifications({
  search,
  page,
  perpage,
  filter
}: UserNotificationT) {
  return useQuery({
    queryKey: GET_USER_NOTIFICATIONS({ search, page, perpage, filter }),
    queryFn: async () => {
      const data = await NotificationService.getApiNotificationUser({
        search,
        page,
        perpage,
        filter
      });
      return data;
    },
    keepPreviousData: true
  });
}
