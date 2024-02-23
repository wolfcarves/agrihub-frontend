import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "../../../ui/command";
import useGetFarmCropsQuery from "../../../../hooks/api/get/useGetFarmCropsQuery";
import { cn } from "../../../lib/utils";
import { useParams } from "react-router-dom";
import { NewCommunityCropReport } from "../../../../api/openapi";
import { UseFormSetValue } from "react-hook-form";
import useGetCropsQuery from "../../../../hooks/api/get/useGetCropsQuery";
import { ScrollArea } from "../../../ui/scroll-area";
const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" }
] as const;

interface SelectCropProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<NewCommunityCropReport>;
  };
  other?: boolean;
}
const SelectCropAll: React.FC<SelectCropProps> = ({ field, form, other }) => {
  const { data: farmCrops } = useGetCropsQuery();

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between border-border text-sm rounded py-0 ",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? farmCrops?.find(crops => crops.id === field.value)?.name
              : field.value === ""
              ? "Others"
              : "Select Crop"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[21rem] p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Search Crop..." />

            <CommandEmpty>No Crop found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[40vh]">
                {farmCrops?.map(crops => (
                  <CommandItem
                    value={crops.name}
                    key={crops.name}
                    onSelect={() => {
                      form.setValue("crop_id", crops.id);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        crops.id === field.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {crops.name}
                  </CommandItem>
                ))}
                {other && (
                  <CommandItem
                    value="Others"
                    onSelect={() => {
                      form.setValue("crop_id", "");
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        "" === field.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    Others
                  </CommandItem>
                )}
              </ScrollArea>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectCropAll;
