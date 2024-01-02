import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@api/openapi";
import { GET_USER_KEY } from "../get/useGetMyProfileQuery";
import { useNavigate } from "react-router-dom";

const useQuestionKey = () => ["QUESTIONS_KEY"];

export default function useDeleteAuthMutate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: useQuestionKey(),
    mutationFn: async () => {
      const response = await AuthService.deleteApiAuthLogout();
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] });

      navigate("/", { replace: true });
      window.location.reload();
    }
  });
}
