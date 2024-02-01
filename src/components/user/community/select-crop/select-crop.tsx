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

interface SelectCropProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<NewCommunityCropReport>;
  };
}
const SelectCrop: React.FC<SelectCropProps> = ({ field, form }) => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? farmCrops?.find(crops => crops.id === field.value)?.name
              : "Select language"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[21rem] p-0" side="bottom" align="start">
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
                      crops.id === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {crops.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectCrop;
