import React, { useEffect } from "react";
import { Form, FormField } from "../../../../ui/form";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import useFarmAddGalleryMutation from "../../../../../hooks/api/post/useFarmAddGalleryMutation";
import { NewCommunityFarmGallery } from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addGalleryCommunitySchema } from "./schema";
import { toast } from "sonner";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import Loader from "../../../../../icons/Loader";

interface CommunityAddImageFormProps {
  setIsOpen: (value: boolean) => void;
}

const CommunityAddImageForm: React.FC<CommunityAddImageFormProps> = ({
  setIsOpen
}) => {
  const form = useForm<NewCommunityFarmGallery>({
    resolver: zodResolver(addGalleryCommunitySchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
    if (form.formState.errors.image) {
      toast.error(form.formState.errors.image.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: farmAddGalleryMutate, isLoading: isFarmGalleryLoading } =
    useFarmAddGalleryMutation();

  const handleSubmitForm = async (data: NewCommunityFarmGallery) => {
    const compiledData: NewCommunityFarmGallery = {
      description: data.description,
      image: data.image
    };

    try {
      await farmAddGalleryMutate(compiledData);
      toast.success("Uploaded Successfully!");
      setIsOpen(false);
      //   navigate("/community");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-3"
      >
        <div className=" md:col-span-12 col-span-12">
          <Label className=" font-poppins-medium">Description</Label>
          <Input
            type="text"
            className="h-10"
            placeholder="Enter Description..."
            {...form.register("description")}
          />
        </div>
        <div className="col-span-12">
          <Label className=" font-poppins-medium">Images</Label>
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <MultiImageUpload
                onChange={value => form.setValue("image", value)}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-2 col-span-12">
          <Button
            disabled={isFarmGalleryLoading}
            type="button"
            variant={"outline"}
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
          <Button disabled={isFarmGalleryLoading} type="submit">
            Save
          </Button>
        </div>
        <Loader isVisible={isFarmGalleryLoading} />
      </form>
    </Form>
  );
};

export default CommunityAddImageForm;
