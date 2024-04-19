import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FarmService } from "@api/openapi";
import { GET_CROP_ARCHIVE_LIST_ADMIN } from "../get/useGetFarmCropsArchiveListAdmin";

const usePutFarmCropAdminUnarchiveKey = () => "PUT_CROP_ADMIN_UNARCHIVE_KEY";

export default function usePutFarmCropAdminUnarchive() {
  const queryClient = useQueryClient();

  return useMutation([usePutFarmCropAdminUnarchiveKey()], {
    async mutationFn(id: string) {
      const response = await FarmService.putApiFarmCropUnarchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CROP_ARCHIVE_LIST_ADMIN()]);
    }
  });
}
