import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const useDeleteEventPartnerKey = () => "EVEN_REMOVE_PARTNER_KEY";

export default function useDeleteEventPartner() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteEventPartnerKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.deleteApiEventsDeletePartnership({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
