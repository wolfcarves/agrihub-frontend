import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import useForgotPasswordMutation from "@hooks/api/post/useForgotPasswordMutation";
import {
  forgotPasswordSchema,
  ForgotPasswordType
} from "@components/user/account/forms/UserForgotPasswordForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";
import { useState } from "react";
import useForgotPasswordByOTPMutation from "@hooks/api/post/useForgotPasswordByOTPMutation";
import { toast } from "sonner";

const UserForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [resetType, setResetType] = useState<"email" | "phone">("email");

  const form = useForm<ForgotPasswordType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(forgotPasswordSchema)
  });

  const {
    mutateAsync: sendEmail,
    isLoading: isSendEmailLoading,
    isSuccess: isSendEmailSuccess
  } = useForgotPasswordMutation();

  const {
    mutateAsync: sendOTP,
    isLoading: isSendOTPLoading,
    isSuccess: isSendOTPSuccess
  } = useForgotPasswordByOTPMutation();

  const handleSubmitForm = async (data: ForgotPasswordType) => {
    try {
      if (resetType === "email") {
        const res = await sendEmail(data?.username);
        toast.success(res.message);
      }

      if (resetType === "phone") {
        const res = await sendOTP(data?.phone);
        toast.success(res.message);
        navigate(`/account/reset-password/verify-otp?p=${data?.phone}`, {
          replace: true
        });
      }
    } catch (error: any) {
      form.setError("username", { message: error.body.message });
      form.setError("phone", { message: error.body.message });
    }
  };

  return (
    <>
      {!(isSendEmailSuccess || isSendOTPSuccess) ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="w-full max-w-[33rem] mx-auto bg-white border shadow-md py-7 px-10 rounded-2xl"
          >
            <div>
              <div className="space-y-1 pb-8">
                <h3 className="font-poppins-semibold">Reset your password</h3>
                <h6 className="font-poppins-regular">
                  Enter your email to send request to reset your password
                </h6>
              </div>

              <div className="space-y-3">
                {resetType === "email" ? (
                  <FormField
                    name="username"
                    control={form.control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>
                          <h6 className="font-poppins-medium">Email</h6>
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="border-b my-4 py-3 w-full outline-0 text-md"
                            placeholder="Enter your email here..."
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    name="phone"
                    defaultValue=""
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>
                          <h6 className="font-poppins-medium">Phone number</h6>
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="border-b my-4 py-3 w-full outline-0 text-md"
                            placeholder="Enter your phone number here..."
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                )}

                <div className="flex flex-wrap items-center justify-between mt-4 pt-3">
                  <div
                    role="button"
                    className="text-blue-500 cursor-pointer py-3"
                    onClick={() => {
                      setResetType(prev =>
                        prev === "email" ? "phone" : "email"
                      );

                      form.clearErrors();
                      form.reset();
                    }}
                  >
                    {resetType === "email"
                      ? "Use OTP instead?"
                      : "Use email instead?"}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="w-full py-6"
                      size="lg"
                      disabled={isSendEmailLoading || isSendOTPLoading}
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="w-full py-6"
                      size="lg"
                      isLoading={isSendEmailLoading || isSendOTPLoading}
                    >
                      Reset password
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      ) : (
        <div className="flex flex-col items-center space-y-4 max-w-[33rem] mx-auto">
          <MdMarkEmailRead className="text-primary text-9xl" />

          <div className="flex flex-col items-center">
            <h4 className="font-poppins-semibold text-2xl text-center">
              Password reset is sent!
            </h4>

            <h4 className="text-md text-center mt-2">
              Please check your email account for the password reset link. Let
              us know if you encounter any issues.
            </h4>

            <div className="mt-4">
              <Link to="/account/login">
                <Link to="../login">
                  <Button
                    variant="outline"
                    className="w-full py-6"
                    size="lg"
                    disabled={isSendEmailLoading}
                  >
                    Back to login
                  </Button>
                </Link>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForgotPasswordForm;
