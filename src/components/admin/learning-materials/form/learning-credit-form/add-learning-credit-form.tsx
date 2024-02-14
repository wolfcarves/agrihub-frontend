import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import { Button } from "@components/ui/button";

import { Card } from "@components/ui/card";
import { useState } from "react";
import { NewLearningCredits } from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addLearningCreditSchema } from "./schema";
import useLearningCreateCredits from "../../../../../hooks/api/post/useLearningCreateCredits";
import { Form } from "../../../../ui/form";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import Loader from "../../../../../icons/Loader";
interface AddLearningResourceProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const AddLearningCreditForm: React.FC<AddLearningResourceProps> = ({
  setIsOpen
}) => {
  const { learningsId } = useParams();
  const form = useForm<NewLearningCredits>({
    resolver: zodResolver(addLearningCreditSchema),
    mode: "onBlur"
  });

  //edit
  const { mutateAsync: createCreditMutate, isLoading: isCreditLoading } =
    useLearningCreateCredits();

  const handleSubmitForm = async (data: NewLearningCredits) => {
    const compiledData: NewLearningCredits = {
      title: data.title,
      name: data.name
    };
    console.log(compiledData);

    try {
      await createCreditMutate({
        id: learningsId || "",
        requestBody: compiledData
      });
      toast.success("Credit Added Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="grid w-full items-center gap-1.5">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="e.g Engr. Jusin F. Malindao"
              {...form.register("name")}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="e.g Agriculturist"
              {...form.register("title")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <Button variant={"outline"} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
      <Loader isVisible={isCreditLoading} />
    </Form>
  );
};

export default AddLearningCreditForm;
