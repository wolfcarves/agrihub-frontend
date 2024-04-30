import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { NewHarvestTask } from "../../../../../../api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import useCommunityFarmTaskHarvest from "../../../../../../hooks/api/post/useCommunityFarmTaskHarvest";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { format } from "date-fns";
import { Form, FormField, FormMessage } from "../../../../../ui/form";
import { Label } from "../../../../../ui/label";
import Input from "../../../../../ui/custom/input/input";
import { Textarea } from "../../../../../ui/textarea";
import { Button } from "../../../../../ui/button";
import { DialogFooter } from "../../../../../ui/dialog";
import Loader from "../../../../../../icons/Loader";
import SelectMember from "../../../select-member/select-member";
import SelectReport from "../select-report";

const harvestSchema = zod.object({
  report_id: zod.string({
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

type dialogProps = {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
};
const Harvest: React.FC<dialogProps> = ({ setIsOpen }) => {
  const { id } = useParams();
  const form = useForm<NewHarvestTask>({
    resolver: zodResolver(harvestSchema),
    mode: "onBlur"
  });

  const { mutateAsync: harvestMutate, isLoading: harvestLoading } =
    useCommunityFarmTaskHarvest();

  const handleSubmitForm = async (data: NewHarvestTask) => {
    const compiledData: NewHarvestTask = {
      report_id: data.report_id,
      due_date: data.due_date,
      message: data.message,
      assigned_to: data.assigned_to
    };
    console.log(compiledData);

    try {
      await harvestMutate({ id: id || "", requestBody: compiledData });
      toast.success("Harvest Task Assigned Successfully!");
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
          encType="multipart/form-data"
          className="grid gap-4"
        >
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Select Crop</Label>
            <FormField
              control={form.control}
              name="report_id"
              render={({ field }) => <SelectReport field={field} form={form} />}
            />
            <FormMessage>
              {form.formState.errors.report_id?.message}
            </FormMessage>
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
            <Button type="submit" disabled={harvestLoading}>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
      <Loader isVisible={harvestLoading} />
    </>
  );
};

export default Harvest;
