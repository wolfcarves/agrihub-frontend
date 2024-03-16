import React from "react";
import { Button } from "@components/ui/button";
import { Form, FormField } from "@components/ui/form";
import { ProfileSchema, profileSchema } from "./schema";
import useAuth from "@hooks/useAuth";
import useUpdateUserProfileMutation from "@components/user/users/image/useUpdateUserProfileMutation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SettingsField from "@components/user/settings/fields/SettingsField";
import { GET_MY_PROFILE_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import { useQueryClient } from "@tanstack/react-query";

const UserSettingsProfileForm = () => {
  const queryClient = useQueryClient();
  const user = useAuth();

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstname: user?.data?.firstname,
      lastname: user?.data?.lastname,
      bio: user?.data?.bio,
      present_address: user?.data?.present_address
    }
  });

  const { mutateAsync: updateUser, isLoading: isUpdateUserLoading } =
    useUpdateUserProfileMutation();

  const handleSubmitForm = async (data: ProfileSchema) => {
    try {
      if (user?.data?.id) {
        await updateUser({
          id: user?.data?.id,
          formData: { ...data }
        });
      }

      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
      toast.info("Profile updated successfully");
      //redundant neto taena pero go nalang
      form.reset({
        firstname: data?.firstname,
        lastname: data?.lastname,
        bio: data?.bio,
        present_address: data?.present_address
      });
    } catch (error: any) {
      console.log(error.body.message);
      toast.error(error.body.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="py-10 space-y-10"
      >
        <SettingsField
          label="Username"
          defaultValue={user?.data?.username}
          editable={false}
        />

        <hr />

        <FormField
          name="firstname"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="First name"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        />

        <hr />

        <FormField
          name="lastname"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="Last name"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        />

        <hr />

        <FormField
          name="bio"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="Bio"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        />

        <hr />

        <FormField
          name="present_address"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="Present Address"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        />

        {/* <FormField
          name="Birth Date"
          control={form.control}
          defaultValue={user?.data?.birthdate}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="Birth Date"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        /> */}

        {/* <hr /> */}

        {/* <FormField
          name="firstname"
          control={form.control}
          defaultValue={user?.data?.birthdate}
          render={({ field, fieldState }) => {
            return (
              <>
                <SettingsField
                  label="Birth Date"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        /> */}

        <div className="flex gap-3">
          <Button
            variant="default"
            size="lg"
            type="submit"
            disabled={!form.formState.isDirty}
            isLoading={isUpdateUserLoading}
          >
            Save changes
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={e => {
              e.preventDefault();
              form.reset({
                firstname: user?.data?.firstname,
                lastname: user?.data?.lastname,
                bio: user?.data?.bio,
                present_address: user?.data?.present_address
              });
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserSettingsProfileForm;
