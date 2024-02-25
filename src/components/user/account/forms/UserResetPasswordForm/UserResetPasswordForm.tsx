import { Link, useParams } from "react-router-dom";
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
  return <>Testing for Production</>;

  const { register, formState, handleSubmit } = useForm<ResetPasswordType>({
    mode: "onSubmit",
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

  if (isCheckTokenError) {
    return <Unauthorized />;
  }

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

  return (
    <>
      {!isResetPasswordSuccess ? (
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <div>
            <div className="space-y-3">
              <h5 className="font-poppins-semibold">Reset Password</h5>
              <h6>
                Please enter and confirm your new password. <br />
                Minimum of 8 characters
              </h6>
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
                className="w-full"
                isLoading={isResetPasswordLoading || isResetPasswordSuccess}
              >
                Send Request
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col space-y-3 items-center">
          <PiCheckFatBold className="text-9xl text-primary" />
          <h4>Password Reset Successfully</h4>

          <Link to="/account/login">
            <Button variant="link">Back to Login</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserResetPasswordForm;
