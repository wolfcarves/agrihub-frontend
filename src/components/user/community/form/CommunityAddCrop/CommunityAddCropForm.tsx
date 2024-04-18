import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Form, FormField } from "../../../../ui/form";
import { toast } from "sonner";
import { Button } from "../../../../ui/button";
import { Label } from "../../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import useFarmAddCropMutation from "../../../../../hooks/api/post/useFarmAddCropMutation";
import useGetFarmAllCropsQuery from "../../../../../hooks/api/get/useGetFarmAllCropsQuery";
import { useParams } from "react-router-dom";
import Loader from "../../../../../icons/Loader";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";

const addCropCommunitySchema = zod.object({
  cropId: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please select crop")
});

interface CommunityCropTypes {
  farmId: string;
  cropId: string;
}

interface CommunityAddCropFormProps {
  setIsOpen: (value: boolean) => void;
}

const CommunityAddCropForm: React.FC<CommunityAddCropFormProps> = ({
  setIsOpen
}) => {
  const { id } = useParams();
  const form = useForm<CommunityCropTypes>({
    resolver: zodResolver(addCropCommunitySchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.cropId) {
      toast.error(form?.formState?.errors?.cropId?.message);
    }
  }, [form.formState.errors]);

  const { data } = useGetFarmAllCropsQuery();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const { mutateAsync: farmAddCropMutate, isLoading: isFarmCropLoading } =
    useFarmAddCropMutation();

  const handleSubmitForm = async (data: CommunityCropTypes) => {
    const compiledData: CommunityCropTypes = {
      farmId: id || "",
      cropId: data.cropId
    };

    try {
      await farmAddCropMutate(compiledData);
      toast.success("Crop Added Successfully!");
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
          <Label className=" font-poppins-medium">Select Crop</Label>
          <FormField
            control={form.control}
            name="cropId"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a crop..." />
                </SelectTrigger>
                <SelectContent className="overflow-y-auto max-h-[40vh]">
                  {data
                    ?.filter(
                      crop =>
                        !farmCrops?.some(fcCrop => fcCrop.name === crop.name)
                    )
                    .map((crop, i) => (
                      <SelectItem key={i} value={crop?.id || ""}>
                        {crop.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex justify-end gap-1 col-span-12 mt-4">
          <Button
            disabled={isFarmCropLoading}
            onClick={() => setIsOpen(false)}
            variant={"secondary"}
            type="button"
          >
            Close
          </Button>
          <Button disabled={isFarmCropLoading} type="submit">
            Save
          </Button>
        </div>
        <Loader isVisible={isFarmCropLoading} />
      </form>
    </Form>
  );
};

export default CommunityAddCropForm;
