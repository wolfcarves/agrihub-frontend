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
import { Form } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";

const addLearningMaterialSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(3, "Title is too small")
});
interface NewLearningMaterial {
  title: string;
}
const DialogAddLearning = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<NewLearningMaterial>({
    resolver: zodResolver(addLearningMaterialSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addDraftMutate, isLoading: addDraftLoading } =
    useLearningCreateDraftMutation();

  const handleSubmitForm = async (data: NewLearningMaterial) => {
    const compiledData: NewLearningMaterial = {
      title: data.title
    };

    try {
      const response = await addDraftMutate(compiledData);
      toast.success("Draft Created Successfully!");
      setIsOpen(false);
      navigate(`/admin/resource/learnings/view/${response.data.id}`);
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
          <DialogTitle>Add Learning Material</DialogTitle>
          <DialogDescription>
            Create the title of your new learning material first and edit it in
            drafts section. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            encType="multipart/form-data"
            className="grid gap-4"
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="title" className=" font-poppins-medium">
                Title
              </Label>
              <Input
                id="title"
                {...form.register("title")}
                placeholder="insert title of your material"
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save Draft</Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addDraftLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddLearning;
