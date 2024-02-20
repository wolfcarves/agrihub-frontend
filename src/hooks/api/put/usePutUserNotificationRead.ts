import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationService } from "@api/openapi";

const usePutUserNotificationReadKey = () => "USER_NOTIFICATION_READ_KEY";

export default function usePutUserNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation([usePutUserNotificationReadKey()], {
    async mutationFn(id: string) {
      const response = await NotificationService.putApiNotificationUserRead({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GET_USER_NOTIFICATIONS"]);
    }
  });
}
