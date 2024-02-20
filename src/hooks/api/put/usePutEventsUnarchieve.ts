import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_PUBLISHED_LIST } from "../get/useGetEventPublishedListQuery";

const usePutEventsUnarchieveKey = () => "PUT_EVENT_UNARCHIEVE_KEY";

export default function usePutEventsUnarchieve() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsUnarchieveKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.putApiEventsUnarchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_EVENTS_PUBLISHED_LIST()]);
    }
  });
}
