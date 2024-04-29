import React, { Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import * as zod from "zod";
import useCommunityFarmTaskPlanted from "../../../../../../hooks/api/post/useCommunityFarmTaskPlanted";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPlantTask } from "../../../../../../api/openapi";
import { format } from "date-fns";
import Loader from "../../../../../../icons/Loader";
import { Form, FormField, FormMessage } from "../../../../../ui/form";
import { Label } from "../../../../../ui/label";
import { Button } from "../../../../../ui/button";
import SelectMember from "../../../select-member/select-member";
import Input from "../../../../../ui/custom/input/input";
import { Textarea } from "../../../../../ui/textarea";
import { DialogFooter } from "../../../../../ui/dialog";
import SelectCropPlant from "../select-crop-plant";
type dialogProps = {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
};

const plantedSchema = zod.object({
  crop_id: zod.string({
    required_error: "Please select a crop"
  }),
  due_date: zod.string({
    required_error: "Date is required."
  }),
  message: zod
    .string({
      required_error: "Please add a problem"
    })
    .max(300, "Message is too large")
    .min(1, "Message is too short")
    .optional(),
  assigned_to: zod.string({
    required_error: "Please assign a member"
  })
});
const Planted: React.FC<dialogProps> = ({ setIsOpen }) => {
  const { id } = useParams();
  const form = useForm<NewPlantTask>({
    resolver: zodResolver(plantedSchema),
    mode: "onBlur"
  });

  const { mutateAsync: plantMutate, isLoading: plantLoading } =
    useCommunityFarmTaskPlanted();

  const handleSubmitForm = async (data: NewPlantTask) => {
    const compiledData: NewPlantTask = {
      crop_id: data.crop_id,
      due_date: data.due_date,
      message: data.message,
      assigned_to: data.assigned_to
    };
    console.log(compiledData);

    try {
      await plantMutate({ id: id || "", requestBody: compiledData });
      toast.success("Planting Task Assigned Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  console.log(form.formState.errors);

  const getCurrentDate = () => format(new Date(), "yyyy-MM-dd");
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="grid gap-4"
        >
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Select Crop</Label>
            <FormField
              control={form.control}
              name="crop_id"
              render={({ field }) => (
                <SelectCropPlant field={field} form={form} />
              )}
            />
            <FormMessage>{form.formState.errors.crop_id?.message}</FormMessage>
          </div>
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Assign To</Label>
            <FormField
              control={form.control}
              name="assigned_to"
              render={({ field }) => <SelectMember field={field} form={form} />}
            />
            <FormMessage>
              {form.formState.errors.assigned_to?.message}
            </FormMessage>
          </div>
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Due Date</Label>
            <Input
              type="date"
              min={getCurrentDate()}
              {...form.register("due_date")}
              required
            />
            <FormMessage>{form.formState.errors.due_date?.message}</FormMessage>
          </div>
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Message</Label>
            <Textarea {...form.register("message")} required />
            <FormMessage>{form.formState.errors.message?.message}</FormMessage>
          </div>

          <DialogFooter className="flex flex-row gap-2 justify-end">
            <Button
              variant={"secondary"}
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={plantLoading}>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
      <Loader isVisible={plantLoading} />
    </>
  );
};

export default Planted;
