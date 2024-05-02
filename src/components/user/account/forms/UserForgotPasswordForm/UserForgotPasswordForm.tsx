import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import useForgotPasswordMutation from "@hooks/api/post/useForgotPasswordMutation";
import {
  forgotPasswordSchema,
  ForgotPasswordType
} from "@components/user/account/forms/UserForgotPasswordForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@components/ui/input-otp";
import useUserFindForgottenAccount from "@hooks/api/post/useUserFindForgottenAccount";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import LoadingSpinner from "@icons/LoadingSpinner";
import { ForgottenAccountResponse } from "@api/openapi";

const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

const UserForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [resetType, setResetType] = useState<"email" | "phone">("email");
  const [account, setAccount] = useState<ForgottenAccountResponse>();

  const form = useForm<ForgotPasswordType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      username: "",
      phone: ""
    }
  });

  const form2 = useForm<ForgotPasswordType>();

  const { mutateAsync: sendEmail, isLoading: isSendEmailLoading } =
    useForgotPasswordMutation();

  const { mutateAsync: sendOTP, isLoading: isSendOTPLoading } =
    useForgotPasswordByOTPMutation();

  const {
    mutateAsync: userFindAccount,
    isLoading: isUserFindAccountLoading,
    isSuccess: isUserFindAccountSuccess
  } = useUserFindForgottenAccount();

  const handleFindAccountForm = async (data: ForgotPasswordType) => {
    try {
      console.log(data?.phone);

      const res = await userFindAccount(
        data?.username || `${"0" + data?.phone}`
      );
      setAccount(res);
    } catch (error: any) {
      if (error.body.message === "Invalid email or contact") {
        toast.error("No account found");
      }
    }
  };

  const handleSendForm = async () => {
    try {
      if (resetType === "email") {
        await sendEmail(account?.email);
        toast.success(
          `Reset password request successfully sent to ${account?.email}`
        );
        navigate("/");
      }

      if (resetType === "phone") {
        const res = await sendOTP(account?.contact_number);
        toast.success(res.message);
        navigate(
          `/account/reset-password/verify-otp?p=${account?.contact_number}`,
          {
            replace: true
          }
        );
      }
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  return (
    <>
      {!isUserFindAccountSuccess ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFindAccountForm)}
            className="w-full max-w-[35rem] mx-auto bg-white border shadow-md py-10 px-5 md:px-10 rounded-2xl"
          >
            <div>
              <div className="space-y-1 pb-8">
                <h3 className="font-poppins-semibold">Reset your password</h3>
                <h6 className="font-poppins-regular">
                  Enter your email to send request to reset your password
                </h6>
                <h6 className="font-poppins-regular text-foreground/70 text-sm pb-3">
                  Start it with number 9 ex.915XXXXXXX
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
                          <h6 className="font-poppins-medium">
                            Email or Username
                          </h6>
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
                  <div className="flex items-center gap-5">
                    <h5 className="font-poppins-medium">+63</h5>
                    {/* 639 29 603 9363 */}
                    <FormField
                      name="phone"
                      defaultValue=""
                      control={form.control}
                      render={({ field: { onChange } }) => (
                        <InputOTP
                          maxLength={11}
                          onChange={value => {
                            onChange(value);
                          }}
                          render={({ slots }) => {
                            return (
                              <div className="flex flex-wrap gap-y-2 gap-x-1">
                                <InputOTPGroup>
                                  {slots.slice(0, 3).map((slot, index) => (
                                    <InputOTPSlot key={index} {...slot} />
                                  ))}
                                </InputOTPGroup>
                                <div className="w-0.5" />
                                <InputOTPGroup>
                                  {slots.slice(3, 6).map((slot, index) => (
                                    <InputOTPSlot key={index + 3} {...slot} />
                                  ))}
                                </InputOTPGroup>
                                <div className="w-0.5" />
                                <InputOTPGroup>
                                  {slots.slice(6, 10).map((slot, index) => (
                                    <InputOTPSlot key={index + 4} {...slot} />
                                  ))}
                                </InputOTPGroup>
                              </div>
                            );
                          }}
                        />
                      )}
                    />
                  </div>
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
                      type="button"
                      variant="outline"
                      className="w-full py-6"
                      size="lg"
                      disabled={isUserFindAccountLoading}
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="w-full py-6"
                      size="lg"
                      isLoading={isUserFindAccountLoading}
                      disabled={!form.formState.isDirty}
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
        <Form {...form2}>
          <form
            onSubmit={form2.handleSubmit(handleSendForm)}
            className="w-full max-w-[35rem] mx-auto bg-white border shadow-md py-10 px-5 md:px-10 rounded-2xl"
          >
            <>
              {isUserFindAccountLoading ? (
                <LoadingSpinner className="text-primary mx-auto" />
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={S3_BASE_URL + account?.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="h-full">
                      <h3>{account?.firstname + " " + account?.lastname}</h3>
                      <h5 className="text-foreground/80">
                        Is this your account?
                      </h5>
                    </div>
                  </div>

                  <div className="flex mt-5 justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full py-6"
                      size="lg"
                      disabled={isSendEmailLoading || isSendOTPLoading}
                      onClick={() => navigate(-1)}
                    >
                      No
                    </Button>

                    <Button
                      className="w-full py-6"
                      size="lg"
                      isLoading={isSendEmailLoading || isSendOTPLoading}
                    >
                      Yes, this is mine
                    </Button>
                  </div>
                </>
              )}
            </>
          </form>
        </Form>
      )}
    </>
  );
};

export default UserForgotPasswordForm;
