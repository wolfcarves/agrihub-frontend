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
} from "@components/ui/custom/dialog/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import { NewToolRequest } from "../../../../../api/openapi";
import { Textarea } from "../../../../ui/textarea";
import useRequestToolsCreate from "../../../../../hooks/api/post/useRequestToolsCreate";

const addRequestSchema = zod.object({
  tool_requested: zod
    .string({
      required_error: "Tools is required."
    })
    .min(3, "Tool must be atleast 3 characters"),

  quantity_requested: zod.coerce
    .number({
      required_error: "Please provide a requested quantity"
    })
    .min(0, "Requested quantity must be at least 0")
    .max(1000, "Requested quantity cannot exceed 1000"),
  requester_note: zod
    .string({
      required_error: "Note is required."
    })
    .min(3, "Note must be atleast 3 characters"),
  contact: zod
    .string({
      required_error: "Contact is required."
    })
    .min(3, "Contact must be atleast 3 characters")
});

const DialogRequestTool = () => {
  const [isCrop, setIsCrop] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<NewToolRequest>({
    resolver: zodResolver(addRequestSchema),
    mode: "onBlur"
  });

  // useEffect(() => {
  //   if (form.watch("crop_id") === "") {
  //     setIsCrop(false);
  //   } else {
  //     setIsCrop(true);
  //   }
  // }, [form.watch("crop_id")]);

  useEffect(() => {
    if (form.formState.errors.tool_requested) {
      toast.error(form?.formState?.errors?.tool_requested?.message);
    }
    if (form.formState.errors.quantity_requested) {
      toast.error(form?.formState?.errors?.quantity_requested?.message);
    }
    if (form.formState.errors.requester_note) {
      toast.error(form?.formState?.errors?.requester_note?.message);
    }
    if (form.formState.errors.contact) {
      toast.error(form?.formState?.errors?.contact?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addRequestMutate, isLoading: addRequestLoading } =
    useRequestToolsCreate();

  const handleSubmitForm = async (data: NewToolRequest) => {
    const compiledData: NewToolRequest = {
      tool_requested: data.tool_requested,
      quantity_requested: String(data.quantity_requested),
      requester_note: data.requester_note,
      contact: data.contact
    };

    try {
      await addRequestMutate({ requestBody: compiledData });
      toast.success("Tool Requested Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>+Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Tools</DialogTitle>
          <DialogDescription>
            Fill out the form to request tools needed. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            encType="multipart/form-data"
            className="grid gap-4"
          >
            {/* <div className="flex flex-col gap-3">
              <Label>Crops Name</Label>
              <FormField
                control={form.control}
                name="crop_id"
                render={({ field }) => (
                  <SelectCropAll other={true} field={field} form={form} />
                )}
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
            )} */}
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Tool Requested</Label>
              <Input
                {...form.register("tool_requested")}
                type="text"
                placeholder="Input a Tool"
                className="col-span-3"
                min={1}
                max={10000}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">
                Requested Tool Quantity
              </Label>
              <Input
                {...form.register("quantity_requested")}
                type="number"
                placeholder="Input quantity"
                className="col-span-3"
                min={1}
                max={10000}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Notes</Label>
              <Textarea
                {...form.register("requester_note")}
                placeholder="Input notes"
                className="col-span-3"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Contact</Label>
              <Input
                {...form.register("contact")}
                type="text"
                placeholder="Input contact"
                className="col-span-3"
                min={1}
                max={10000}
                required
              />
            </div>

            <DialogFooter className="flex flex-row gap-2 justify-end">
              <Button
                variant={"secondary"}
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
              <Button type="submit" disabled={addRequestLoading}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addRequestLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogRequestTool;
