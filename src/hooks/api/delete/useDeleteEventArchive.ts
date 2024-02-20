import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_PUBLISHED_LIST } from "../get/useGetEventPublishedListQuery";

const useDeleteEventArchiveKey = () => "DELETE_EVENT_ARCHIVE_KEY";

export default function useDeleteEventArchive() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteEventArchiveKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.deleteApiEventsArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_EVENTS_PUBLISHED_LIST()]);
    }
  });
}
