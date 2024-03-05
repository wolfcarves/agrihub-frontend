import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { NewTagRequestBody } from "@api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useTagsCreate from "@hooks/api/post/useTagsCreate";
import Loader from "@icons/Loader";
import { Form, FormField } from "@components/ui/form";

const addTagSchema = zod.object({
  tag_name: zod
    .string({
      required_error: "Title is required."
    })
    .min(3, "Title is too small"),
  details: zod.string().min(10, {
    message: "Description must be at least 10 characters."
  })
});

const DialogAddTags = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<NewTagRequestBody>({
    resolver: zodResolver(addTagSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.tag_name) {
      toast.error(form?.formState?.errors?.tag_name?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addTagMutate, isLoading: addTagLoading } =
    useTagsCreate();

  const handleSubmitForm = async (data: NewTagRequestBody) => {
    const compiledData: NewTagRequestBody = {
      tag_name: data.tag_name,
      details: data.details
    };

    try {
      const response = await addTagMutate(compiledData);
      toast.success(`Tag ${response.data?.tag_name} Created Successfully!`);
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

      {/* tag modal */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Tag</DialogTitle>
          <DialogDescription>
            Add descriptive tags to categorize resources effectively. Click
            'Save' when you've finished
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            encType="multipart/form-data"
            className="grid gap-4"
          >
            <div className="grid gap-4">
              <div className="flex-col gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="tag_name"
                  {...form.register("tag_name")}
                  placeholder="Insert tag name"
                  className="col-span-3"
                />
              </div>
              <div className="flex-col gap-4">
                <Label className="text-right">Descrition</Label>
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <Textarea placeholder="Describe your tag" {...field} />
                  )}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addTagLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTags;
