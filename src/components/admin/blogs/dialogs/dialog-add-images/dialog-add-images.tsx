import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
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
import { FiUploadCloud } from "react-icons/fi";
import useBlogsCreateImage from "../../../../../hooks/api/post/useBlogsCreateImage";
import Capture from "../../../../user/community/capture/capture";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10;
const addImageSchema = zod.object({
  image: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please select an image")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
});
interface ImageType {
  image?: Blob;
}

const DialogAddImages = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>();
  const form = useForm<ImageType>({
    resolver: zodResolver(addImageSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.image) {
      toast.error(form?.formState?.errors?.image?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addImageMutate, isLoading: addImageLoading } =
    useBlogsCreateImage();

  const handleSubmitForm = async (data: ImageType) => {
    const compiledData: ImageType = {
      image: data.image
    };

    try {
      await addImageMutate({
        id: blogId || "",
        formData: compiledData
      });
      toast.success("Image Added Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)} className="w-full p-2">
          <FiUploadCloud className="mr-1" size={18} />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Image</DialogTitle>
          <DialogDescription>
            Upload an Image. Click save when you're done.
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
                Image
              </Label>
              <FormField
                control={form.control}
                name="image"
                render={() => (
                  <Capture onChange={value => form.setValue("image", value)} />
                )}
              />
            </div>
            <DialogFooter>
              <Button
                variant={"outline"}
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
        <Loader isVisible={addImageLoading} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddImages;
