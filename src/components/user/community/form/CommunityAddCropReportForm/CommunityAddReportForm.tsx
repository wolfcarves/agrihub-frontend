import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import { Label } from "../../../../ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../../../ui/popover";
import { Form, FormField } from "../../../../ui/form";
import { Button } from "../../../../ui/button";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "../../../../ui/command";
import { Input } from "../../../../ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent
} from "../../../../ui/select";
import { cn } from "../../../../lib/utils";
import { format } from "date-fns";
import { Calendar } from "../../../../ui/calendar";
import { Textarea } from "../../../../ui/textarea";
import { DialogClose, DialogFooter } from "../../../../ui/dialog";
import months from "./months.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cropAddReportSchema } from "./schema";
import { NewCommunityCropReport } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import useReportCropMutation from "../../../../../hooks/api/post/useReportCropMutation";
import { toast } from "sonner";
import SelectDate from "../../select-date/select-date";

const CommunityAddCropReportForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const form = useForm<NewCommunityCropReport>({
    resolver: zodResolver(cropAddReportSchema),
    mode: "onBlur"
  });

  // useEffect(() => {
  //   if (form.formState.errors.description) {
  //     toast.error(form?.formState?.errors?.description?.message);
  //   }
  //   if (form.formState.errors.image) {
  //     toast.error(form.formState.errors.image.message);
  //   }
  // }, [form.formState.errors]);

  // const { mutateAsync: cropReportMutate, isLoading: cropReportLoading } =
  //   useReportCropMutation();

  const handleSubmitForm = async (data: NewCommunityCropReport) => {
    const compiledData: NewCommunityCropReport = {
      crop_id: data.crop_id,
      planted_qty: data.planted_qty,
      harvested_qty: parseInt(data.date_harvested || "0"),
      withered_crops: data.withered_crops,
      date_planted: data.date_planted,
      date_harvested: data.date_harvested,
      notes: data.notes,
      image: data.image
    };

    try {
      console.log(compiledData);
      // await cropReportMutate(compiledData);
      // toast.success("Uploaded Successfully!");

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
        className="flex flex-col gap-4"
      >
        <div className="">
          <Label>Crops Name</Label>
          <FormField
            control={form.control}
            name="crop_id"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? farmCrops?.find(crops => crops.id === field.value)?.name
                      : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {farmCrops?.map(crops => (
                        <CommandItem
                          value={crops.id}
                          key={crops.id}
                          onSelect={() => {
                            form.setValue("crop_id", crops.id);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              crops.id === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {crops.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            )}
          />
        </div>
        <div className="">
          <Label>Planted Quantity</Label>
          <Input
            {...form.register("planted_qty")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="">
          <Label>Harvested Quantity</Label>
          <Input
            {...form.register("harvested_qty")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="">
          <Label>Withered Crops</Label>
          <Input
            {...form.register("withered_crops")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="">
          <Label>Planted Date</Label>
          <FormField
            name="date_planted"
            render={({ field }) => <SelectDate field={field} />}
          />
        </div>
        <div className="">
          <Label>Harvested Date</Label>
          <FormField
            name="date_harvested"
            render={({ field }) => <SelectDate field={field} />}
          />
        </div>

        <div className="">
          <Label>Notes</Label>
          <Textarea
            {...form.register("notes")}
            placeholder="Type your notes here."
          />
        </div>
        <div className="">
          <Label className=" font-poppins-medium">Farm photo</Label>
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
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default CommunityAddCropReportForm;
