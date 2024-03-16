import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticationSchema, authenticationSchema } from "./schema";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import SettingsField from "@components/user/settings/fields/SettingsField";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const UserSettingsAuthenticationForm = () => {
  const form = useForm<AuthenticationSchema>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(authenticationSchema)
  });

  const handleSubmitForm = () => {};

  return (
    <Form {...form}>
      <form
        className="py-10 space-y-10"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <SettingsField
          hasForm={false}
          label="Change password"
          description="Request to change your current password"
          editable={false}
          buttonComponent={
            <Button variant="outline" size="sm" className="rounded-full">
              Change
            </Button>
          }
        />
      </form>
    </Form>
  );

  return (
    <Form {...form}>
      <form
        className="max-w-[30rem]"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <div className="mt-10 space-y-2 max-w-[30rem]">
          <div className="py-10 space-y-5">
            <div className="space-y-2">
              <h5 className="font-poppins-medium">Old password</h5>

              <FormField
                name="oldPassword"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Old password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    </>
                  );
                }}
              />
            </div>

            <div className="space-y-2">
              <h5 className="font-poppins-medium">New password</h5>
              <FormField
                name="newPassword"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="New password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    </>
                  );
                }}
              />
            </div>

            <div className="space-y-2">
              <h5 className="font-poppins-medium">Confirm new password</h5>
              <FormField
                name="confirmNewPassword"
                control={form.control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm new password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    </>
                  );
                }}
              />
            </div>
          </div>

          <Button className="rounded-full w-24 font-poppins-bold" size="sm">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default withAuthGuard(UserSettingsAuthenticationForm, [
  "member",
  "admin",
  "asst_admin",
  "farm_head",
  "farmer",
  "subfarm_head"
]);
