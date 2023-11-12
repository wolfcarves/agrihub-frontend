import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useLoginUserMutation from "@hooks/api/post/useUserLoginMutation";
import { UserLoginSchema as LoginRequestSchema } from "@api/openapi";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

import { UserLogin, UserLoginSchema } from "./schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";

const UserLoginForm = () => {
  const form = useForm<UserLogin>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: userLogin,
    isLoading: isUserLoginLoading,
    error: userLoginError
  } = useLoginUserMutation();

  const onLoginSubmit = async (data: LoginRequestSchema) => {
    try {
      console.log("test");
      await userLogin(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onLoginSubmit)}>
        <div className="my-1">
          {userLoginError && <span>{userLoginError.body.message}</span>}
        </div>

        <FormField
          control={form.control}
          name="user"
          defaultValue=""
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email or username</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="pt-10">
          <Button type="submit" className="w-full" size={"lg"}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserLoginForm;
