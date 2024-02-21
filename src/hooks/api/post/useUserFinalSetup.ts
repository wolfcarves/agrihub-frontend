import { useMutation } from "@tanstack/react-query";
import { AccountService } from "@api/openapi";
import { UserProfile } from "@api/openapi";
import { useNavigate } from "react-router-dom";

const useUserFinalSetupKey = () => "FINAL_SETUP";

export default function useUserFinalSetup() {
  const navigate = useNavigate();

  return useMutation([useUserFinalSetupKey()], {
    mutationFn: async (data: UserProfile) => {
      const response = await AccountService.postApiAccountSetupProfile({
        formData: data
      });

      return response;
    },
    onSuccess: () => {
      navigate("/", { replace: true });
    }
  });
}
