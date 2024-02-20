import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, UpdateEventSpeaker } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const usePutEventsUpdateSpeakerKey = () => "PUT_EVENTS_UPDATE_SPEAKER_KEY";

type DataSchema = {
  id: string;
  formData: UpdateEventSpeaker;
};

export default function usePutEventsUpdateSpeaker() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsUpdateSpeakerKey()], {
    async mutationFn(data: DataSchema) {
      const response = await EventsService.putApiEventsUpdateSpeaker(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
