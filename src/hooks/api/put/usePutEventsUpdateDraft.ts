import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, UpdateDraftEvent } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const usePutEventsUpdateDraftKey = () => "PUT_EVENTS_UPDATE_DRAFT_KEY";

type DataSchema = {
  id: string;
  formData: UpdateDraftEvent;
};

export default function usePutEventsUpdateDraft() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsUpdateDraftKey()], {
    async mutationFn(data: DataSchema) {
      const response = await EventsService.putApiEventsUpdateDraft(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
