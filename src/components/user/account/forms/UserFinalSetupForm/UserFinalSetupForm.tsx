import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UserFinalSetup, userFinalSetup } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserFinalSetup from "@hooks/api/post/useUserFinalSetup";
import { Form, FormField, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import { toast } from "sonner";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import useAuth from "@hooks/useAuth";
import UserTagInputDropdown from "../../input/UserTagInput";

const UserFinalSetupForm = () => {
  const user = useAuth();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useState<File | undefined>();

  const [searchTagKeyword, setSearchTagKeyword] = useState<string>("");

  const { mutateAsync: deleteAuth, isLoading: isDeleteAuthLoading } =
    useDeleteAuthMutate();

  const form = useForm<UserFinalSetup>({
    resolver: zodResolver(userFinalSetup),
    mode: "onChange",
    defaultValues: {
      username:
        user?.data?.firstname +
        String(new Date(user?.data?.birthdate ?? "").getDate())
    }
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
      tags: rawData?.tags
    };

    try {
      return await userFinalSetupMutate(data);
    } catch (e: any) {
      toast(e.body.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmitForm)}
        encType="multipart/form-data"
      >
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
            <h6 className="font-medium">Username</h6>
            <div className="py-2 w-72">
              <FormField
                name="username"
                control={form.control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      placeholder="Username"
                      $isError={fieldState?.error && true}
                      {...field}
                    />
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </>
                )}
              />
            </div>

            <input
              {...form.register("avatar")}
              type="file"
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

            <span className=" text-destructive">
              {form.formState.errors.avatar?.message as string}
            </span>

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

        <div className=" flex flex-col mt-5">
          <div className="pb-5">
            <h4>Agricultural tags that interest you</h4>

            <h6 className="text-foreground/70">
              Picking tags will help us show you much more relevant questions
              and answers.
            </h6>
          </div>

          <FormField
            name="tags"
            control={form.control}
            render={({ field }) => (
              <UserTagInputDropdown
                keyword={searchTagKeyword}
                onTagsValueChange={field.onChange}
                onChange={e => setSearchTagKeyword(e.target.value)}
              />
            )}
          />
        </div>

        <div className="-z-10">
          <Button
            className="relative w-full mt-10"
            isLoading={isUserFinalSetupLoading || isUserFinalSetupSuccess}
          >
            Continue
          </Button>

          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => deleteAuth()}
            isLoading={isDeleteAuthLoading}
          >
            Use other account instead
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserFinalSetupForm;
