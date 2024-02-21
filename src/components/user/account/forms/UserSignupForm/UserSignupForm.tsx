import { useForm } from "react-hook-form";
import { UserSignUp, userSignupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSignupMutation from "@hooks/api/post/useUserSignupMutation";
import {
  LeminCroppedCaptchaContainer,
  leminCroppedCaptcha
} from "@leminnow/react-lemin-cropped-captcha";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import { toast } from "sonner";

const CAPTCHA_CONTAINER_ID = import.meta.env.VITE_CAPTCHA_CONTAINER_ID;
const CAPTCHA_ID = import.meta.env.VITE_CAPTCHA_ID;
// const CAPTCHA_PRIVATE_KEY = import.meta.env.VITE_CAPTCHA_PRIVATE_KEY;

const UserSignupForm = () => {
  const { getCaptcha } = leminCroppedCaptcha;
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  const form = useForm<UserSignUp>({
    resolver: zodResolver(userSignupSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: signUpUser,
    isLoading: isSignUpUserLoading,
    isSuccess: isSignUpUserSuccess
  } = useUserSignupMutation();

  const onSignupSubmit = async (data: any) => {
    try {
      const isVerified =
        getCaptcha().getCaptchaValue().answer !== "" ? true : false;

      if (isVerified) {
        // const { answer, challenge_id } = getCaptcha().getCaptchaValue();

        // const raw = {
        //   email: data.email,
        //   password: data.password,
        //   confirmPassword: data.confirmPassword,
        //   privateKey: CAPTCHA_PRIVATE_KEY,
        //   challengeId: challenge_id,
        //   answer
        // } as UserRegisterSchema & {
        //   privateKey: string;
        //   challengeId: string;
        //   answer: string;
        // };

        await signUpUser(data);
      } else {
        setCaptchaError(true);
      }
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSignupSubmit)}>
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email or username"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Create password"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm password"
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="py-7 text-black">
            <LeminCroppedCaptchaContainer
              containerId={CAPTCHA_CONTAINER_ID}
              captchaId={CAPTCHA_ID}
              onVerify={(status: boolean) => setCaptchaError(!status)}
            />

            <div className="py-2">
              {captchaError && (
                <span className="text-center text-danger-500">
                  Enter captcha
                </span>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              isLoading={isSignUpUserLoading || isSignUpUserSuccess}
            >
              Create
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserSignupForm;
