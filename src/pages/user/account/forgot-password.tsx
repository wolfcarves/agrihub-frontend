import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import { useForm } from "react-hook-form";
import useForgotPasswordMutation from "@hooks/api/post/useForgotPasswordMutation";
import {
  forgotPasswordSchema,
  ForgotPasswordType
} from "@components/user/account/forms/UserForgotPasswordForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { register, formState, setError, handleSubmit } =
    useForm<ForgotPasswordType>({
      mode: "onSubmit",
      reValidateMode: "onChange",
      resolver: zodResolver(forgotPasswordSchema)
    });

  const {
    mutateAsync: sendEmail,
    isLoading,
    isSuccess
  } = useForgotPasswordMutation();

  const handleSendEmail = async (data: ForgotPasswordType) => {
    try {
      const response = await sendEmail(data?.username);

      throw new Error(response.message);
    } catch (error: any) {
      setError("username", { message: error.body.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSendEmail)}>
      {!isSuccess ? (
        <div>
          <h5 className="font-poppins-semibold">Reset Password</h5>

          <div className="space-y-4 mt-5">
            <Input
              placeholder="Email or Username"
              {...register("username")}
              $errorMessage={formState.errors.username?.message}
            />

            <Button className="w-full" isLoading={isLoading}>
              Send Request
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <MdMarkEmailRead className="text-primary text-9xl" />

          <div className="flex flex-col items-center">
            <h4 className="font-poppins-medium ms-3">
              Reset password request sent to your email
            </h4>

            <Link to="/account/login">
              <Button className="mt-3" variant="outline">
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};

export default ForgotPassword;
