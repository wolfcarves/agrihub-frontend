import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { ProfileSchema, profileSchema } from "./schema";
import useAuth from "@hooks/useAuth";
import useUpdateUserProfileMutation from "@hooks/api/post/useUpdateUserProfileMutation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SettingsField from "@components/user/settings/fields/SettingsField";
import { GET_MY_PROFILE_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@components/ui/popover";
import { Calendar } from "@components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { district } from "@constants/data";

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
      present_address: user?.data?.present_address,
      dob: new Date(user?.data?.birthdate ?? ""),
      district: user?.data?.district
    }
  });

  const { mutateAsync: updateUser, isLoading: isUpdateUserLoading } =
    useUpdateUserProfileMutation();

  const handleSubmitForm = async (data: ProfileSchema) => {
    try {
      if (user?.data?.id) {
        await updateUser({
          id: user?.data?.id,
          formData: {
            ...data,
            bio: data?.bio ?? "",
            birthdate: new Date(data?.dob ?? "").toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            })
          }
        });
      }

      queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] });
      toast.info("Profile updated successfully");

      form.reset({
        firstname: data?.firstname,
        lastname: data?.lastname,
        bio: data?.bio,
        present_address: data?.present_address,
        dob: new Date(data?.dob ?? ""),
        district: data?.district
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
        className="mt-14 space-y-10 pb-20"
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
                  placeholder="Enter your first name here"
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
                  placeholder="Enter your lastname name here"
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
                  {...field}
                  label="Bio"
                  placeholder="Enter your bio here"
                  errMessage={fieldState.error?.message}
                  value={field.value ?? ""}
                />
              </>
            );
          }}
        />

        <hr />

        <FormField
          name="dob"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <FormItem>
                  <FormControl>
                    <SettingsField
                      label={"Birth Date"}
                      renderInput={() => {
                        return (
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="w-max h-11">
                                <button type="button">
                                  <h5 className="font-poppins-regular text-foreground">
                                    {format(field.value, "LLLL d, yyyy")}
                                  </h5>
                                </button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={date =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                classNames={{
                                  caption_label:
                                    "flex items-center text-sm font-medium",
                                  dropdown: "rdp-dropdown",
                                  dropdown_icon: "ml-2",
                                  dropdown_year: "rdp-dropdown_year ml-3",
                                  button: "",
                                  button_reset: ""
                                }}
                                fromYear={1900}
                                toYear={new Date().getFullYear() - 19}
                                captionLayout="dropdown-buttons"
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
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
                  placeholder="Enter your address here"
                  errMessage={fieldState.error?.message}
                  {...field}
                />
              </>
            );
          }}
        />

        <FormField
          name="district"
          control={form.control}
          defaultValue="1"
          render={({ field, fieldState }) => {
            return (
              <FormItem>
                <FormControl>
                  <Select
                    value={String(field.value)}
                    onValueChange={value => {
                      field.onChange(value);
                      // form.setValue("municipality", "");
                    }}
                  >
                    <SelectTrigger className="w-[180px] bg-white h-11 text-foreground/70 font-poppins-regular text-base">
                      <SelectValue placeholder="District 1" />
                    </SelectTrigger>
                    <SelectContent>
                      {district.map((label, idx) => {
                        const dist = (idx + 1).toString();

                        return (
                          <SelectItem value={dist} className="cursor-pointer">
                            {label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            );
          }}
        />

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
            disabled={!form.formState.isDirty}
            onClick={e => {
              e.preventDefault();
              form.reset({
                firstname: user?.data?.firstname,
                lastname: user?.data?.lastname,
                bio: user?.data?.bio,
                present_address: user?.data?.present_address,
                dob: new Date(user?.data?.birthdate ?? ""),
                district: user?.data?.district
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
