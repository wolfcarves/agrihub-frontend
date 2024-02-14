import React, { useState } from "react";
import { Card } from "@components/ui/card";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { Textarea } from "../../../../ui/textarea";
import CoverImageUpload from "../../../../ui/custom/image/cover-image-input";
import { Button } from "../../../../ui/button";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addResourceSchema } from "./schema";
import { NewLearningResource } from "../../../../../api/openapi";
import useLearningCreateResource from "../../../../../hooks/api/post/useLearningCreateResource";
import { Form, FormField } from "../../../../ui/form";
import Dropzone from "../../../../user/community/dropzone/dropzone";
import { toast } from "sonner";
interface AddLearningInterfaceProps {
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddLearningResourceForm: React.FC<AddLearningInterfaceProps> = ({
  setHide
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { learningsId } = useParams();

  const form = useForm<NewLearningResource>({
    resolver: zodResolver(addResourceSchema),
    mode: "onBlur"
  });

  //edit
  const { mutateAsync: createResourceMutate, isLoading: isResourceLoading } =
    useLearningCreateResource();

  const handleSubmitForm = async (data: NewLearningResource) => {
    const compiledData: NewLearningResource = {
      name: data.name,
      description: data.description,
      resource: data.resource,
      type: data.type,
      image: data.image
    };
    console.log(compiledData);

    try {
      await createResourceMutate({
        id: learningsId || "",
        formData: compiledData
      });
      toast.success("Resource Added Successfully!");
      setHide(false);
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
      >
        <h2 className="text-md font-bold tracking-tight mb-2">Add Resource</h2>
        <Card className="p-4 mb-4">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <h2 className="text-sm font-bold tracking-tight">
              New Resource Form
            </h2>
            <div className="w-full flex justify-between gap-4">
              <div className="grid w-full max-w-[46rem] items-center gap-1.5">
                <Label>Title</Label>
                <Input
                  type="text"
                  placeholder="Input resource title"
                  {...form.register("name")}
                />
              </div>

              <div className="grid w-full max-w-[10rem] items-center gap-1.5">
                <Label>Type</Label>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <Select
                      onValueChange={newValue => {
                        field.onChange(newValue);
                        setSelectedType(newValue);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue
                          className=" uppercase"
                          placeholder="Select Type.."
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label>Description</Label>
              <Textarea
                placeholder="insert resource desc"
                className="active:border-green-500"
                {...form.register("description")}
              />
            </div>
            {/* for image upload  */}
            {selectedType === "image" && (
              <div className="grid w-full items-center gap-1.5">
                <Label>Upload Image</Label>
                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <Dropzone
                      onChange={value => {
                        form.setValue("image", value);
                      }}
                    />
                  )}
                />
              </div>
            )}

            {/* for video upload */}
            {selectedType === "video" && (
              <div className="grid w-full items-center gap-1.5">
                <Label>Video Source</Label>
                <Input
                  type="text"
                  placeholder="Input video link"
                  {...form.register("resource")}
                />
              </div>
            )}
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <div className="flex gap-4">
              <Button type="submit" variant="secondary">
                Save
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  );
};

export default AddLearningResourceForm;
