import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationService } from "@api/openapi";

const usePostUserNotificationReadAllKey = () => "USER_NOTIFICATION_READ_ALL_KEY";


export default function usePostUserNotificationReadAll() {
  const queryClient = useQueryClient();

  return useMutation([usePostUserNotificationReadAllKey()], {
    async mutationFn(data: any) {
      const response = await NotificationService.postApiNotificationReadAll(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GET_USER_NOTIFICATIONS"]);
    }
  });
}
