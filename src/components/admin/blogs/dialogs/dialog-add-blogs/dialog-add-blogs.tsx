import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import { NewDraftEvent } from "../../../../../api/openapi";
import useBlogsCreateDraftMutation from "../../../../../hooks/api/post/useBlogsCreateDraftMutation";

const addEventSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(3, "Title is too small")
});

const DialogAddBlogs = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<NewDraftEvent>({
    resolver: zodResolver(addEventSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addDraftMutate, isLoading: addDraftLoading } =
    useBlogsCreateDraftMutation();

  const handleSubmitForm = async (data: NewDraftEvent) => {
    const compiledData: NewDraftEvent = {
      title: data.title
    };

    try {
      const response = await addDraftMutate(compiledData);
      toast.success("Draft Blog Created Successfully!");
      setIsOpen(false);
      navigate(`/admin/resource/blogs/view/${response.data?.id}`);
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
          <DialogTitle>Add Blog</DialogTitle>
          <DialogDescription>
            Create the title of your blog first and edit it in drafts section.
            Click save when you're done.
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
                placeholder="insert title of the event"
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

export default DialogAddBlogs;
