import React, { useEffect, useState } from "react";
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
import SelectCropAll from "../../select-crop-all/select-crop-all";
import { DialogFooter } from "../../../../ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";

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
  quantity_request: zod.coerce
    .number({
      required_error: "Please provide a requested quantity"
    })
    .min(0, "Requested quantity must be at least 0")
    .max(1000, "Requested quantity cannot exceed 1000")
});
interface formProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const FormRequestSeedling: React.FC<formProps> = ({ setIsOpen }) => {
  const [isCrop, setIsCrop] = useState<boolean>(true);
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

  useEffect(() => {
    if (form.formState.errors.note) {
      toast.error(form?.formState?.errors?.note?.message);
    }
    if (form.formState.errors.other) {
      toast.error(form?.formState?.errors?.other?.message);
    }
    if (form.formState.errors.quantity_request) {
      toast.error(form?.formState?.errors?.quantity_request?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addRequestMutate, isLoading: addRequestLoading } =
    useRequestSeedlingCreate();

  const handleSubmitForm = async (data: NewSeedlingRequest) => {
    const compiledData: NewSeedlingRequest = {
      crop_id: data.crop_id,
      other: data.other,
      quantity_request: data.quantity_request
    };
    if (compiledData.other) {
      delete compiledData.crop_id;
    }
    try {
      await addRequestMutate({ requestBody: compiledData });
      toast.success("Seedling Requested Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className="grid gap-4"
        >
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Crops Name</Label>
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
              <Label className=" font-poppins-medium">Other Crop Name</Label>
              <Input
                {...form.register("other")}
                placeholder="Other crop name"
                className="col-span-3"
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">
              Requested Crop Quantity
            </Label>
            <Input
              {...form.register("quantity_request")}
              type="number"
              placeholder="Quantity"
              className="col-span-3"
              min={1}
              max={10000}
              required
            />
          </div>
          {/* <div className="flex flex-col gap-3">
      <Label htmlFor="title" className=" font-poppins-medium">
        Note
      </Label>
      <Textarea {...form.register("note")} className="col-span-3" />
    </div> */}
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
    </>
  );
};

export default FormRequestSeedling;
