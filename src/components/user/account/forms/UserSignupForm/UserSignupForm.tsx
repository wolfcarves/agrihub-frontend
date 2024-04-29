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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { UserRegisterSchema } from "@api/openapi";

const CAPTCHA_CONTAINER_ID = import.meta.env.VITE_CAPTCHA_CONTAINER_ID;
const CAPTCHA_ID = import.meta.env.VITE_CAPTCHA_ID;

//FOR BACKEND
// const CAPTCHA_PRIVATE_KEY = import.meta.env.VITE_CAPTCHA_PRIVATE_KEY;
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

const UserSignupForm = () => {
  const { getCaptcha } = leminCroppedCaptcha;
  const [captchaError, setCaptchaError] = useState<boolean>(false);
  const [method, setMethod] = useState<"email" | "phone">("email");

  const form = useForm<UserSignUp>({
    resolver: zodResolver(userSignupSchema(method)),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: signUpUser,
    isLoading: isSignUpUserLoading,
    isSuccess: isSignUpUserSuccess
  } = useUserSignupMutation();

  const onSignupSubmit = async (data: UserSignUp) => {
    try {
      const isVerified =
        getCaptcha().getCaptchaValue().answer !== "" ? true : false;

      if (isVerified) {
        const raw: UserRegisterSchema = {
          email: method === "email" ? data.email : undefined,
          phone_number: method === "phone" ? data.phone : undefined,
          password: data.password,
          confirmPassword: data.confirmPassword
        };

        await signUpUser(raw);
      } else {
        setCaptchaError(true);
      }
    } catch (e: any) {
      if (e.status === 429) {
        toast.error("Too many request, Please try again later");
      }

      toast.error(e.body.message);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSignupSubmit)}>
          <div className="flex flex-col gap-3">
            <Tabs
              value={method}
              onValueChange={e => setMethod(e as "email" | "phone")}
            >
              <TabsList className="w-full ">
                <TabsTrigger
                  value="email"
                  className="w-full gap-2 font-poppins-regular"
                >
                  <MdOutlineMail size={16} className="mt-0.5" />
                  Email
                </TabsTrigger>
                <TabsTrigger
                  value="phone"
                  className="w-full gap-2 font-poppins-regular"
                >
                  <LuPhone size={14} />
                  Phone
                </TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="mt-7">
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
                          placeholder="Email"
                          $isError={fieldState?.error && true}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </TabsContent>
              <TabsContent value="phone" className="mt-7">
                <FormField
                  control={form.control}
                  name="phone"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Phone number"
                          $isError={fieldState?.error && true}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

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
                      $isError={fieldState?.error && true}
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
                      $isError={fieldState?.error && true}
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
                  <span className="text-center text-destructive">
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
    </>
  );
};

export default UserSignupForm;
