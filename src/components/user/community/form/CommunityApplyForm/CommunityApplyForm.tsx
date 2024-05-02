import React, { useEffect, useState } from "react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import { toast } from "sonner";
import { FarmMemberApplication } from "../../../../../api/openapi";
import { useNavigate, useParams } from "react-router-dom";
import ActivityIndicator from "@icons/ActivityIndicator";
import { Checkbox } from "../../../../ui/checkbox";
import DataPrivacyDialog from "../../../../ui/custom/data-privacy-dialog/data-privacy-dialog";
import { CheckedState } from "@radix-ui/react-checkbox";
import Capture from "../../capture/capture";
import useGetFarmViewQuery from "../../../../../hooks/api/get/useGetFarmViewQuery";
import useGetCommunityFarmQuestions from "../../../../../hooks/api/get/useGetCommunityFarmQuestions";
import useCommunityFarmApplyFarmer from "../../../../../hooks/api/post/useCommunityFarmApplyFarmer";
import { applyCommunitySchema } from "./schema";
import { Textarea } from "../../../../ui/textarea";
import ReviewDialog from "./ReviewDialog";
interface Answer {
  questionid: string;
  answer: string;
}
const CommunityApplyForm = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogReview, setDialogReview] = useState<boolean>();
  const [check, setCheck] = useState<CheckedState>(false);
  const { id } = useParams();
  const { data: farmDetails } = useGetFarmViewQuery(id || "");
  const { data: questionData } = useGetCommunityFarmQuestions(id || "");

  const navigate = useNavigate();
  const form = useForm<FarmMemberApplication>({
    resolver: zodResolver(applyCommunitySchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.valid_id) {
      toast.error(form.formState.errors.valid_id.message?.toString());
    }

    if (form.formState.errors.root) {
      toast.error(form.formState.errors.root.message?.toString());
    }
  }, [form.formState.errors]);

  const { mutateAsync: farmApplyMutate, isLoading: isFarmApplyLoading } =
    useCommunityFarmApplyFarmer();

  const handleValidation = async () => {
    const success = await form.trigger();
    if (success) {
      return setDialogReview(true);
    }
  };
  const handleSubmitForm = async (data: FarmMemberApplication) => {
    if (!check) {
      form.setError("root", {
        type: "manual",
        message:
          "Oops! It looks like you forgot to agree to the terms and conditions."
      });
      return null;
    }
    try {
      const compiledData: FarmMemberApplication = {
        contact_person: data.contact_person,
        reason: data.reason,
        answer: answers.length ? JSON.stringify(answers) : undefined,
        proof_selfie: data.proof_selfie,
        valid_id: data.valid_id
      };

      await farmApplyMutate({ id: id || "", formData: compiledData });

      toast.success("Applied Successfully!");
      navigate("/community");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  const handleAnswerChange = (index: number, answer: string) => {
    const updatedAnswers = [...answers];
    if (questionData && questionData[index]) {
      updatedAnswers[index] = {
        questionid: questionData[index].id || "",
        answer
      };
      setAnswers(updatedAnswers);
    }
  };

  console.log(answers);

  return (
    <div className="w-full md:px-0 px-2 my-4">
      <div className="">
        <h2 className="font-poppins-medium">
          Apply to {farmDetails?.farm_name}
        </h2>
        <div></div>
      </div>
      <hr className="mb-4 mt-1 border-primary border-2" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className=" grid grid-cols-12 gap-4"
        >
          <div className=" md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">
              Contact Person (Optional)
            </Label>
            <Input
              type="text"
              className="h-10 bg-transparent"
              placeholder="Enter contact..."
              {...form.register("contact_person")}
            />

            <FormMessage>
              {form.formState.errors.contact_person?.message}
            </FormMessage>
          </div>
          {questionData?.map((question, i) => (
            <div key={i} className=" md:col-span-6 col-span-12">
              <Label className=" font-poppins-medium">
                {question.question}
              </Label>
              <Input
                type="text"
                className="h-10 bg-transparent"
                placeholder="Enter answer..."
                onChange={e => handleAnswerChange(i, e.target.value)}
              />
            </div>
          ))}
          <div className=" md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Reason</Label>
            <Textarea
              className="h-10 bg-transparent"
              placeholder="Enter reason..."
              {...form.register("reason")}
            />

            <FormMessage>{form.formState.errors.reason?.message}</FormMessage>
          </div>

          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Proof Selfie</Label>
            <FormField
              control={form.control}
              name="proof_selfie"
              render={() => (
                <Capture
                  onChange={value => form.setValue("proof_selfie", value)}
                />
              )}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Valid ID</Label>
            <FormField
              control={form.control}
              name="valid_id"
              render={() => (
                <Capture onChange={value => form.setValue("valid_id", value)} />
              )}
            />
            <p className=" text-xs text-gray-500">
              This form exclusively accepts valid identification documents
              issued in the Philippines.(ex. Philippine driver's license, Brgy.
              ID, passport, or any government-issued ID card)
            </p>
          </div>
          <div className="flex items-center space-x-2 col-span-12">
            <Checkbox
              checked={check}
              onCheckedChange={checked => setCheck(checked)}
            />
            <Label>
              Accept{" "}
              <span
                onClick={() => setDialogOpen(true)}
                className="text-primary underline"
              >
                terms and conditions
              </span>
            </Label>
          </div>

          <div className="col-span-12">
            {/* <Button disabled={isFarmApplyLoading} type="submit">
              Apply
            </Button> */}
            <Button type="button" onClick={handleValidation}>
              Apply
            </Button>
            <ReviewDialog
              dialogReview={dialogReview}
              setDialogReview={setDialogReview}
              form={form}
              handleSubmitForm={handleSubmitForm}
            />
          </div>
        </form>
      </Form>
      <ActivityIndicator isVisible={isFarmApplyLoading} />
      <DataPrivacyDialog
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default CommunityApplyForm;
