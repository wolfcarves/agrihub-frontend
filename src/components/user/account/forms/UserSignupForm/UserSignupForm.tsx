import { useForm } from "react-hook-form";
import { UserSignUp, userSignupSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSignupMutation from "@hooks/api/post/useUserSignupMutation";
import {
  LeminCroppedCaptchaContainer,
  leminCroppedCaptcha
} from "@leminnow/react-lemin-cropped-captcha";
import { useState } from "react";
import { UserRegisterSchema } from "@api/openapi";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import LoadingSpinner from "@icons/LoadingSpinner";

const CAPTCHA_CONTAINER_ID = import.meta.env.VITE_CAPTCHA_CONTAINER_ID;
const CAPTCHA_ID = import.meta.env.VITE_CAPTCHA_ID;
const CAPTCHA_PRIVATE_KEY = import.meta.env.VITE_CAPTCHA_PRIVATE_KEY;

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
        const { answer, challenge_id } = getCaptcha().getCaptchaValue();

        const raw = {
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          privateKey: CAPTCHA_PRIVATE_KEY,
          challengeId: challenge_id,
          answer
        } as UserRegisterSchema & {
          privateKey: string;
          challengeId: string;
          answer: string;
        };

        await signUpUser(data);
      } else {
        setCaptchaError(true);
      }
    } catch (e: any) {
      //
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSignupSubmit)}
        className="space-y-3 mt-5"
      >
        <FormField
          name="email"
          control={form.control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          name="confirmPassword"
          control={form.control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
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
              <span className="text-center text-danger-500">Enter captcha</span>
            )}
          </div>
        </div>

        <div>
          <Button
            variant={"default"}
            size={"lg"}
            className="w-full"
            disabled={isSignUpUserLoading || isSignUpUserSuccess}
          >
            {!isSignUpUserLoading ? "Continue" : <LoadingSpinner />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserSignupForm;
