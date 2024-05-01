import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Label } from "@components/ui/label";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useEffect, useState } from "react";
import * as zod from "zod";
import { UpdateTermsConditionsRequest } from "../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useGetCmsTermsConditions from "../../../../hooks/api/get/useGetCmsTermsConditions";
import Loader from "../../../../icons/Loader";
import { toast } from "sonner";
import { Form, FormField } from "../../../../components/ui/form";
import usePutCmsTermsConditionsUpdate from "../../../../hooks/api/put/usePutCmsTermsConditionsUpdate";
const breadcrumbItems = [
  {
    title: "Terms and Conditions",
    link: "/admin/website/terms-conditions"
  }
];
const termsConditionSchema = zod.object({
  content: zod.string({
    required_error: "Content is required."
  })
});
const TermsAdmin = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { data: termsData, isLoading: presentData } =
    useGetCmsTermsConditions();

  const form = useForm<UpdateTermsConditionsRequest>({
    resolver: zodResolver(termsConditionSchema),
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

  const { mutateAsync: updateTerms, isLoading: termsLoading } =
    usePutCmsTermsConditionsUpdate();

  const handleSubmitForm = async (data: UpdateTermsConditionsRequest) => {
    const compiledData: UpdateTermsConditionsRequest = {
      content: data.content
    };

    try {
      await updateTerms({ requestBody: compiledData });
      toast.success("Terms & Conditions Updated Successfully!");
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
          <h2 className="text-3xl font-bold tracking-tight">
            Terms and Conditions
          </h2>
          <p className="text-sm text-muted-foreground w-10/12">
            Administrate the terms and conditions to establish clear guidelines
            for user interaction. Define user rights, responsibilities, and
            limitations to maintain consistency and legality across the
            platform.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
          <div>
            <div className="w-full mb-5">
              <Label>Terms</Label>
              <FormField
                name="content"
                control={form.control}
                render={({ field: { onChange } }) => {
                  return (
                    <RichTextEditor
                      defaultValue={termsData?.content}
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
              <Button type="submit" disabled={termsLoading}>
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
      <Loader isVisible={termsLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  TermsAdmin,
  ["admin", "asst_admin"],
  "terms_and_conditions"
);
