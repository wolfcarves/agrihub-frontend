import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_LIST } from "../get/useGetEventsDraftList";

const usePutEventsUnpublishKey = () => "PUT_EVENT_UNPUBLISH_KEY";

export default function usePutEventsUnpublish() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsUnpublishKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.putApiEventsUnpublish({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_EVENTS_DRAFT_LIST()]);
    }
  });
}
