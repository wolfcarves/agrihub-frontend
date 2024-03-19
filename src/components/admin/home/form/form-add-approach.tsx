import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { UpdateApproachRequest } from "../../../../api/openapi";
import { toast } from "sonner";
import useCmsLandingUpdateApproach from "../../../../hooks/api/post/useCmsLandingUpdateApproach";
import { Form, FormField } from "../../../ui/form";
import { Label } from "../../../ui/label";
import IconSelector from "../../../user/community/Icon-selector/icon-selector";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import Loader from "../../../../icons/Loader";
export const approachSchema = zod.object({
  icon: zod.string({
    required_error: "Icon is required."
  }),
  title: zod.string({
    required_error: "Title is required."
  }),

  description: zod.string({
    required_error: "Description is required."
  })
});

interface formProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormAddApproach: React.FC<formProps> = ({ setIsOpen }) => {
  //form
  const form = useForm<UpdateApproachRequest>({
    resolver: zodResolver(approachSchema),
    mode: "onBlur"
  });

  // validations
  useEffect(() => {
    if (form.formState.errors.icon) {
      toast.error(form?.formState?.errors?.icon?.message);
    }
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
  }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateApproachMutate, isLoading: isApproachLoading } =
    useCmsLandingUpdateApproach();

  //submit form
  const handleSubmitForm = async (data: UpdateApproachRequest) => {
    try {
      const compiledData: UpdateApproachRequest = {
        icon: data.icon,
        title: data.title,
        description: data.description
      };
      await updateApproachMutate({
        requestBody: compiledData
      });
      toast.success("Approach Item Details Updated Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <>
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
          <div className="grid grid-cols-4 gap-4 py-4">
            <div className=" col-span-4">
              <Label>Approach</Label>
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <IconSelector field={field} form={form} />
                )}
              />
            </div>
            <div className=" col-span-4">
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="Enter approach title here"
                {...form.register("title")}
              />
            </div>

            <div className=" col-span-4">
              <Label>Description</Label>
              <Textarea
                className=" custom-scroll"
                {...form.register("description")}
              />
            </div>
          </div>
          <div className=" flex justify-end gap-3">
            <Button
              onClick={() => setIsOpen(false)}
              variant={"secondary"}
              type="button"
            >
              Close
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </Form>
      <Loader isVisible={isApproachLoading} />
    </>
  );
};

export default FormAddApproach;
