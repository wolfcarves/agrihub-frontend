import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, NewEventPartnership } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const useEventsCreatePartnersKey = () => "EVENTS_CREATE_PARTNERS_KEY";

type DataSchema = {
  id: string;
  formData: NewEventPartnership;
};

export default function useEventsCreatePartners() {
  const queryClient = useQueryClient();

  return useMutation([useEventsCreatePartnersKey()], {
    async mutationFn(data: DataSchema) {
      const response = await EventsService.postApiEventsCreatePartnership(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
