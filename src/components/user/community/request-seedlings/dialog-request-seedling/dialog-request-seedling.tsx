import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as zod from "zod";
import useLearningCreateDraftMutation from "../../../../../hooks/api/post/useLearningCreateDraftMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import useRequestSeedlingCreate from "../../../../../hooks/api/post/useRequestSeedlingCreate";
import { NewSeedlingRequest } from "../../../../../api/openapi";
import SelectCrop from "../../select-crop/select-crop";
import { Textarea } from "../../../../ui/textarea";

const addRequestSchema = zod.object({
  crop_id: zod
    .string({
      required_error: "crop is required."
    })
    .optional(),
  other: zod
    .string({
      required_error: "Other is required."
    })
    .optional(),
  quantity_request: zod
    .string({
      required_error: "Quantity is required."
    })
    .optional(),
  note: zod.string({
    required_error: "Note is required."
  })
});

const DialogRequestSeedling = () => {
  const [isCrop, setIsCrop] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<NewSeedlingRequest>({
    resolver: zodResolver(addRequestSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.watch("crop_id") === "") {
      setIsCrop(false);
    } else {
      setIsCrop(true);
    }
  }, [form.watch("crop_id")]);

  // useEffect(() => {
  //   if (form.formState.errors.title) {
  //     toast.error(form?.formState?.errors?.title?.message);
  //   }
  // }, [form.formState.errors]);

  const { mutateAsync: addRequestMutate, isLoading: addRequestLoading } =
    useRequestSeedlingCreate();

  const handleSubmitForm = async (data: NewSeedlingRequest) => {
    const compiledData: NewSeedlingRequest = {
      crop_id: data.crop_id,
      other: data.other,
      quantity_request: Number(data.quantity_request),
      note: data.note
    };

    try {
      await addRequestMutate({ requestBody: compiledData });
      toast.success("Seedling Requested Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button>+Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Crop Seedlings</DialogTitle>
          <DialogDescription>
            Fill out the form to request seedlings. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            encType="multipart/form-data"
            className="grid gap-4"
          >
            <div className="flex flex-col gap-3">
              <Label>Crops Name</Label>
              <FormField
                control={form.control}
                name="crop_id"
                render={({ field }) => <SelectCrop field={field} form={form} />}
              />
            </div>
            {!isCrop && (
              <div className="flex flex-col gap-3">
                <Label htmlFor="title" className=" font-poppins-medium">
                  Other Crop Name
                </Label>
                <Input
                  {...form.register("other")}
                  placeholder="Other crop name"
                  className="col-span-3"
                />
              </div>
            )}
            <div className="flex flex-col gap-3">
              <Label htmlFor="title" className=" font-poppins-medium">
                Requested Crop Quantity
              </Label>
              <Input
                {...form.register("quantity_request")}
                type="number"
                placeholder="Quantity"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="title" className=" font-poppins-medium">
                Note
              </Label>
              <Textarea {...form.register("note")} className="col-span-3" />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={addRequestLoading}>
                Save Draft
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addRequestLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogRequestSeedling;
