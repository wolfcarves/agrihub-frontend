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
import useLearningCreateDraftMutation from "../../../../../hooks/api/post/useLearningCreateDraftMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import useRequestSeedlingCreate from "../../../../../hooks/api/post/useRequestSeedlingCreate";
import {
  NewSeedlingRequest,
  ReportRequestBody
} from "../../../../../api/openapi";
import SelectCrop from "../../select-crop/select-crop";
import { Textarea } from "../../../../ui/textarea";
import SelectCropAll from "../../select-crop-all/select-crop-all";
import useProblemsCommunityCreate from "../../../../../hooks/api/post/useProblemsCommunityCreate";
import SelectProblem from "../../select-problems/select-problems";
import { format } from "date-fns";

const addProblemSchema = zod.object({
  problem_id: zod
    .string({
      required_error: "Please select a problem"
    })
    .optional(),
  date_noticed: zod.string({
    required_error: "Date is required."
  }),
  problem: zod
    .string({
      required_error: "Please add a problem"
    })
    .optional(),
  description: zod
    .string({
      required_error: "Please add description"
    })
    .optional()
});

const DialogAddProblem = () => {
  const [isOther, setIsOther] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<ReportRequestBody>({
    resolver: zodResolver(addProblemSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.watch("problem_id") === "") {
      setIsOther(true);
    } else {
      setIsOther(false);
    }
  }, [form.watch("problem_id")]);

  useEffect(() => {
    if (form.formState.errors.problem_id) {
      toast.error(form?.formState?.errors?.problem_id?.message);
    }
    if (form.formState.errors.date_noticed) {
      toast.error(form?.formState?.errors?.date_noticed?.message);
    }
    if (form.formState.errors.problem) {
      toast.error(form?.formState?.errors?.problem?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addProblemMutate, isLoading: addProblemLoading } =
    useProblemsCommunityCreate();

  const handleSubmitForm = async (data: ReportRequestBody) => {
    const compiledData: ReportRequestBody = {
      problem_id: data.problem_id,
      date_noticed: data.date_noticed,
      is_other: isOther ? true : false,
      problem: data.problem,
      description: data.description
    };
    if (isOther) {
      delete compiledData.problem_id;
    }
    try {
      await addProblemMutate({ requestBody: compiledData });
      toast.success("Problem Submitted Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  console.log(form.watch("date_noticed"));

  const getCurrentDate = () => format(new Date(), "yyyy-MM-dd");

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>+Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit a problem</DialogTitle>
          <DialogDescription>
            Fill out the form to submit a problem. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            encType="multipart/form-data"
            className="grid gap-4"
          >
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Select Problem</Label>
              <FormField
                control={form.control}
                name="problem_id"
                render={({ field }) => (
                  <SelectProblem other={true} field={field} form={form} />
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Date Notice</Label>
              <Input
                type="date"
                max={getCurrentDate()}
                {...form.register("date_noticed")}
                required
              />
            </div>
            {isOther && (
              <>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="title" className=" font-poppins-medium">
                    Problem
                  </Label>
                  <Input
                    {...form.register("problem")}
                    placeholder="Input a problem"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="title" className=" font-poppins-medium">
                    Description
                  </Label>
                  <Textarea
                    {...form.register("description")}
                    className="col-span-3"
                  />
                </div>
              </>
            )}

            <DialogFooter className="flex flex-row gap-2 justify-end">
              <Button
                variant={"secondary"}
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
              <Button type="submit" disabled={addProblemLoading}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addProblemLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddProblem;
