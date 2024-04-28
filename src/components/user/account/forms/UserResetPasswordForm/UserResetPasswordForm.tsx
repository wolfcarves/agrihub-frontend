import { Link, useNavigate, useParams } from "react-router-dom";
import useGetAuthCheckTokenQuery from "@hooks/api/get/useGetAuthCheckTokenQuery";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import useResetPasswordMutation from "@hooks/api/post/useUserResetPasswordMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordType } from "./schema";
import { PiCheckFatBold } from "react-icons/pi";
import Unauthorized from "@pages/user/common/unauthorized";

const UserResetPasswordForm = () => {
  const navigate = useNavigate();

  const { register, formState, handleSubmit } = useForm<ResetPasswordType>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(resetPasswordSchema)
  });

  const token = useParams().token ?? "";

  const { isError: isCheckTokenError } = useGetAuthCheckTokenQuery(token);
  const {
    mutateAsync: resetPasswordMutate,
    isLoading: isResetPasswordLoading,
    isSuccess: isResetPasswordSuccess
  } = useResetPasswordMutation();

  const handleResetPassword = async (data: ResetPasswordType) => {
    try {
      await resetPasswordMutate({
        token: token,
        requestBody: {
          ...data
        }
      });
    } catch (error) {}
  };

  if (isCheckTokenError) {
    return <Unauthorized />;
  }

  return (
    <>
      {!isResetPasswordSuccess ? (
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <div className="w-full max-w-[33rem] mx-auto">
            <div className="space-y-3">
              <h4 className="font-poppins-semibold">Reset Password</h4>
              <h5 className=" text-gray-500">
                Password must be at least 8 characters including at least one
                digits (0-9), one uppercase (A-Z), and one lowercase (a-z).
              </h5>
            </div>

            <div className="space-y-4 mt-5">
              <Input
                {...register("password")}
                type="password"
                placeholder="New password"
                $errorMessage={formState?.errors?.password?.message}
              />

              <Input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm new password"
                $errorMessage={formState?.errors?.confirmPassword?.message}
              />

              <Button
                type="submit"
                className="w-full mt-4"
                isLoading={isResetPasswordLoading}
                size="lg"
              >
                Change Password
              </Button>

              <Button
                variant="outline"
                className="w-full mt-4"
                disabled={isResetPasswordLoading}
                size="lg"
                onClick={() => navigate("../../")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col space-y-3 items-center">
          <PiCheckFatBold className="text-9xl text-primary" />
          <h4 className="font-poppins-semibold text-2xl text-center">
            Password Reset Successfully
          </h4>

          <Link to="/account/login">
            <Button variant="outline" size="lg" className="py-6">
              Back to Login
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserResetPasswordForm;
