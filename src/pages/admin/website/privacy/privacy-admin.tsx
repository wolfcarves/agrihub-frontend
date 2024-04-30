import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Label } from "@components/ui/label";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useEffect, useState } from "react";
import useGetCmsPrivacyPolicy from "../../../../hooks/api/get/useGetCmsPrivacyPolicy";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { UpdatePrivacyPolicyRequest } from "../../../../api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useCmsPrivacyPolicyUpdate from "../../../../hooks/api/post/useCmsPrivacyPolicyUpdate";
import { Form, FormField } from "../../../../components/ui/form";
import Loader from "../../../../icons/Loader";
const breadcrumbItems = [
  {
    title: "Privacy Policy",
    link: "/admin/website/privacy-policy"
  }
];
const privacyPolicySchema = zod.object({
  content: zod.string({
    required_error: "Content is required."
  })
});
const PrivacyAdmin = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { data: privacyData, isLoading: presentData } =
    useGetCmsPrivacyPolicy();

  const form = useForm<UpdatePrivacyPolicyRequest>({
    resolver: zodResolver(privacyPolicySchema),
    mode: "onBlur"
  });

  const handleDisable = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setDisabled(false);
  };

  useEffect(() => {
    if (form.formState.errors.content) {
      toast.error(form?.formState?.errors?.content?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: updatePrivacy, isLoading: privacyLoading } =
    useCmsPrivacyPolicyUpdate();

  const handleSubmitForm = async (data: UpdatePrivacyPolicyRequest) => {
    const compiledData: UpdatePrivacyPolicyRequest = {
      content: data.content
    };

    try {
      await updatePrivacy({ requestBody: compiledData });
      toast.success("Privacy Policy Updated Successfully!");
      setDisabled(true);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  if (presentData) {
    return <Loader isVisible={true} />;
  }
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Privacy Policy</h2>
          <p className="text-sm text-muted-foreground w-10/12">
            Review and manage the privacy policy to ensure compliance with data
            protection regulations and to safeguard user privacy. Understand the
            collection, usage, and protection of user data to maintain
            transparency and build trust."
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
          <div>
            <div className="w-full mb-5">
              <Label>Privacy</Label>
              <FormField
                name="content"
                control={form.control}
                render={({ field: { onChange } }) => {
                  return (
                    <RichTextEditor
                      defaultValue={privacyData?.content}
                      height={300}
                      disabled={disabled}
                      onBlur={data => {
                        onChange(data.html);
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>
          <div className="fixed bottom-8 right-8">
            {!disabled ? (
              <Button type="submit" disabled={privacyLoading}>
                Save
              </Button>
            ) : (
              <Button
                type={"button"}
                variant={"outline"}
                className=" border-primary/60 text-primary hover:text-white hover:bg-primary"
                onClick={e => handleDisable(e)}
              >
                Edit
              </Button>
            )}
          </div>
        </form>
      </Form>
      <Loader isVisible={privacyLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  PrivacyAdmin,
  ["admin", "asst_admin"],
  "privacy_policy"
);
