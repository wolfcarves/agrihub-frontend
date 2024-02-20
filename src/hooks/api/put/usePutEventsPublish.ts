import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_PUBLISHED_LIST } from "../get/useGetEventPublishedListQuery";

const usePutEventsPublishKey = () => "PUT_EVENT_PUBLISH_KEY";

export default function usePutEventsPublish() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsPublishKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.putApiEventsPublish({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_EVENTS_PUBLISHED_LIST()]);
    }
  });
}
