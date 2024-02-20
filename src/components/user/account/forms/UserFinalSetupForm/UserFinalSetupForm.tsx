import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UserFinalSetup, userFinalSetup } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserFinalSetup from "@hooks/api/post/useUserFinalSetup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import { toast } from "sonner";

const UserFinalSetupForm = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useState<File | undefined>();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>();

  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  useEffect(() => {}, [searchInputTagValue, tagResult]);

  const form = useForm<UserFinalSetup>({
    resolver: zodResolver(userFinalSetup),
    mode: "onChange"
  });

  const { ref: formRef, onChange } = form.register("avatar");

  const handleFileUpload = () => {
    inputFileRef?.current?.click();
  };

  const {
    mutateAsync: userFinalSetupMutate,
    isLoading: isUserFinalSetupLoading,
    isSuccess: isUserFinalSetupSuccess
  } = useUserFinalSetup();

  const handleOnSubmitForm = async (rawData: UserFinalSetup) => {
    const data = {
      avatar: rawData.avatar[0],
      username: rawData.username,
      tags: tags
    };

    try {
      const length = tags?.length || 0;
      if (length >= 2) {
        return await userFinalSetupMutate(data);
      }
      throw new Error("Please select atleast 2 tags");
    } catch (e: any) {
      if (e.message === "Please select atleast 2 tags") {
        return toast(e.message);
      }
      toast(e.body.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmitForm)}
        encType="multipart/form-data"
      >
        <div className="py-2">
          <FormField
            name="username"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <Input {...field} placeholder="Username" />
            )}
          />
        </div>

        <div className="sm:flex gap-3 mt-3">
          <div className="overflow-hidden w-[150px] border rounded-lg aspect-square bg-gradient-to-r from-cyan-500 to-blue-500">
            {imgFile && (
              <img
                src={URL.createObjectURL(imgFile)}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex flex-col">
            <h6 className="font-medium">Profile Picture</h6>

            <input
              {...form.register("avatar")}
              type="file"
              name="avatar"
              accept="image/jpeg,image/jpg,image/png"
              ref={e => {
                formRef(e);
                inputFileRef.current = e;
              }}
              onChange={e => {
                onChange(e);
                setImgFile(
                  e.target.files?.[0] !== undefined
                    ? e.target.files?.[0]
                    : imgFile
                );
              }}
              className="hidden"
            />

            <span>{form.formState.errors.avatar?.message as string}</span>

            <div className="w-max mt-auto">
              <Button
                type="button"
                variant={"outline"}
                onClick={handleFileUpload}
              >
                Pick a photo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-5 -z-10">
          <h5 className="pb-3">Agricultural tags that interest you : </h5>

          <UserTagInputDropdown
            option={tagResult}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInputTagValue(e.target.value);
            }}
            onTagsValueChange={e => setTags(e)}
          />

          <Button
            className="relative w-full mt-10"
            isLoading={isUserFinalSetupLoading || isUserFinalSetupSuccess}
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserFinalSetupForm;
