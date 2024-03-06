import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { ProfileSchema, profileSchema } from "./schema";
import useAuth from "@hooks/useAuth";
import useUpdateUserProfileMutation from "@components/user/users/image/useUpdateUserProfileMutation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UserSettingsProfileForm = () => {
  const user = useAuth();
  const [isSubmitReady, setIsSubmitReady] = useState<boolean>(false);

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  form.watch("firstname");
  form.watch("lastname");
  form.watch("bio");

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name && value) {
        return setIsSubmitReady(
          value?.[name] !== user?.data?.[name] ? true : false
        );
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch]);

  const { mutateAsync: updateUser, isLoading: isUpdateUserLoading } =
    useUpdateUserProfileMutation();

  const handleSubmitForm = async (data: ProfileSchema) => {
    try {
      if (user?.data?.id && isSubmitReady) {
        await updateUser({
          id: user?.data?.id,
          formData: { ...data }
        });
      }

      toast.info("Profile updated successfully");
      setIsSubmitReady(false);
    } catch (error: any) {
      console.log(error.body.message);
      toast.error(error.body.message);
    }
  };

  return (
    <Form {...form}>
      <form
        className="max-w-[30rem]"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <div className="mt-10 space-y-2">
          <h4 className="text-sm font-poppins-medium uppercase text-foreground/70">
            Personal Information
          </h4>
          <hr />
        </div>

        <div className="flex flex-col gap-3 justify-between mt-6">
          <div>
            <h5 className="font-poppins-medium">
              First name {"("}required{")"}
            </h5>
            <span className="text-sm">Set your first name here.</span>
          </div>

          <FormField
            name="firstname"
            control={form.control}
            defaultValue={user?.data?.firstname}
            render={({ field, fieldState }) => {
              return (
                <>
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        {...field}
                        maxLength={30}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>

                  <span className="text-sm">
                    {30 - field.value.length} characters remaining
                  </span>
                </>
              );
            }}
          />
        </div>

        <div className="flex flex-col gap-3 justify-between mt-6">
          <div>
            <h5 className="font-poppins-medium">
              Last name {"("}required{")"}
            </h5>
            <span className="text-sm">Set your last name here.</span>
          </div>

          <FormField
            name="lastname"
            control={form.control}
            defaultValue={user?.data?.lastname ?? ""}
            render={({ field, fieldState }) => {
              return (
                <>
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Full name"
                        maxLength={30}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>

                  <span className="text-sm">
                    {30 - field.value.length} characters remaining
                  </span>
                </>
              );
            }}
          />
        </div>

        <div className="flex flex-col gap-3 justify-between mt-6">
          <div>
            <h5 className="font-poppins-medium">
              Biography {"("}optional{")"}
            </h5>
            <span className="text-sm">
              A brief description of yourself shown on your profile.
            </span>
          </div>

          <FormField
            name="bio"
            control={form.control}
            defaultValue={user?.data?.bio}
            render={({ field }) => {
              return (
                <>
                  <Textarea className="w-full" {...field} maxLength={100} />
                  <span className="text-sm">
                    {field?.value ? 100 - field?.value?.length : 100} characters
                    remaining
                  </span>
                </>
              );
            }}
          />
        </div>

        <div className="mt-5">
          <Button
            variant="default"
            className="rounded-full w-24 font-poppins-bold"
            size="sm"
            disabled={!isSubmitReady || isUpdateUserLoading}
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserSettingsProfileForm;
