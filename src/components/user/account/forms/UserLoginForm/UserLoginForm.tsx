import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLoginUserMutation from "@hooks/api/post/useUserLoginMutation";
import { UserLoginSchema as LoginRequestSchema } from "@api/openapi";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import { toast } from "sonner";
import { UserLogin, UserLoginSchema } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { Link, useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  const navigate = useNavigate();

  const form = useForm<UserLogin>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: userLogin,
    isLoading: isUserLoginLoading,
    isSuccess: isUserLoginSuccess
  } = useLoginUserMutation();

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      await userLogin(data);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onLoginSubmit)}>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="user"
              defaultValue=""
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email or username"
                      $isError={fieldState?.error && true}
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
                      placeholder="Password"
                      $isError={fieldState?.error && true}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Link
            to="/account/forgot-password"
            className="font-poppins-regular pt-2 hover:opacity-90 hover:underline ml-2 w-max"
          >
            Forgot Password
          </Link>

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full"
              isLoading={isUserLoginLoading || isUserLoginSuccess}
            >
              Log in
            </Button>
          </div>
        </form>
      </Form>

      <div className="flex flex-col gap-2 py-5 ">
        <span className="text-foreground/70">
          Don't have an account?{" "}
          <span
            className="text-primary/80 hover:opacity-90 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              navigate("/account/signup");
            }}
          >
            Signup
          </span>
        </span>
      </div>
    </>
  );
};

export default UserLoginForm;
