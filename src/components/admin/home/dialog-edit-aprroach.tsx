import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../ui/custom/dialog/dialog";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import IconSelector from "../../user/community/Icon-selector/icon-selector";
import { Input } from "../../ui/input";
import { TiEdit } from "react-icons/ti";
import useGetCmsLandingDetails from "../../../hooks/api/get/useGetCmsLandingDetails";
import * as zod from "zod";
import { UpdateApproachRequest } from "../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCmsLandingUpdateApproach from "../../../hooks/api/post/useCmsLandingUpdateApproach";
import { toast } from "sonner";
import { Form, FormField } from "../../ui/form";
import Loader from "../../../icons/Loader";
interface dialogProps {
  approachId: string;
}
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
const DialogEditAprroach: React.FC<dialogProps> = ({ approachId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // get present data
  const { data: landingData, isLoading: LearningDataLoading } =
    useGetCmsLandingDetails();

  //get present credits
  const activeApproach = useMemo(() => {
    return landingData?.approach_items?.find(
      approach => approach.id === approachId
    );
  }, [landingData, approachId]);

  //form
  const form = useForm<UpdateApproachRequest>({
    resolver: zodResolver(approachSchema),
    mode: "onBlur"
  });

  // validations
  // useEffect(() => {
  //   if (form.formState.errors.cta_header) {
  //     toast.error(form?.formState?.errors?.cta_header?.message);
  //   }
  //   if (form.formState.errors.cta_description) {
  //     toast.error(form?.formState?.errors?.cta_description?.message);
  //   }
  //   if (form.formState.errors.approach) {
  //     toast.error(form?.formState?.errors?.approach?.message);
  //   }
  // }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateApproachMutate, isLoading: isApproachLoading } =
    useCmsLandingUpdateApproach();

  //submit form
  const handleSubmitForm = async (data: UpdateApproachRequest) => {
    const compiledData: UpdateApproachRequest = {
      id: activeApproach?.id || "",
      icon: data.icon,
      title: data.title,
      description: data.description
    };
    try {
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
    <Dialog open={isOpen}>
      <DialogTrigger>
        <TiEdit
          onClick={() => setIsOpen(true)}
          size={25}
          className="  border p-1 rounded-full text-green-600 border-green-400/45 bg-green-300/30 hover:animate-pulse"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Approach</DialogTitle>
          <DialogDescription>
            Make changes to approach items here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
                  defaultValue={activeApproach?.title}
                  {...form.register("title")}
                />
              </div>

              <div className=" col-span-4">
                <Label>Description</Label>
                <Textarea
                  className=" custom-scroll"
                  defaultValue={activeApproach?.description}
                  {...form.register("description")}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => setIsOpen(false)}
                variant={"secondary"}
                type="button"
              >
                Close
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>{" "}
          </form>
        </Form>
        <Loader isVisible={isApproachLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditAprroach;
