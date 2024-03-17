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

const UserForgotPasswordForm = () => {
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
    <form
      onSubmit={handleSubmit(handleSendEmail)}
      className="w-full max-w-[40rem] mx-auto"
    >
      {!isSuccess ? (
        <div>
          <div className="space-y-3">
            <h3 className="font-merri-black">Reset your password</h3>
            <h5>Enter your email to send request to reset your password</h5>
          </div>

          <div className="space-y-3 mt-5">
            <p className="text-destructive text-md">
              {formState.errors.username?.message}
            </p>
            <input
              {...register("username")}
              className="border-b my-4 py-3 w-full outline-0 text-lg"
              placeholder="Enter your email here..."
            />

            <Button className="w-full mt-4" size="lg" isLoading={isLoading}>
              <span className="text-base">Send request</span>
            </Button>

            <div className="">
              <Link to="../login">
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  isLoading={isLoading}
                >
                  <span className="text-base">Cancel</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 ">
          <MdMarkEmailRead className="text-primary text-9xl" />

          <div className="flex flex-col items-center">
            <h4 className="font-merri-black text-2xl">
              Reset password request sent to your email
            </h4>

            <Link to="/account/login">
              <Button className="mt-7" variant="outline">
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};

export default UserForgotPasswordForm;
