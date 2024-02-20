import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const usePutEventsUpdatePartnersKey = () => "PUT_EVENTS_UPDATE_PARTNERS_KEY";

type DataSchema = {
  id: string;
  formData: {
    name?: string;
    organizer?: string;
    type?: string;
    logo?: Blob;
  };
};

export default function usePutEventsUpdatePartners() {
  const queryClient = useQueryClient();

  return useMutation([usePutEventsUpdatePartnersKey()], {
    async mutationFn(data: DataSchema) {
      const response = await EventsService.putApiEventsUpdatePartnership(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
