import React, { useState } from "react";
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
import { ScrollArea } from "../../../ui/scroll-area";

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
const SelectCrop: React.FC<SelectCropProps> = ({ field, form, other }) => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
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
            <CommandInput placeholder="Search language..." />
            <CommandEmpty className="py-1">
              <p
                onClick={() => {
                  form.setValue("crop_id", "");
                  setOpen(false);
                }}
                className=" cursor-pointer hover:bg-[#F1F5F9] py-2 text-center text-sm "
              >
                Add Other Crop
              </p>
            </CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[40vh] overflow-y-auto custom-scroll touch-auto">
                {farmCrops?.map(crops => (
                  <CommandItem
                    value={crops.name}
                    key={crops.name}
                    onSelect={() => {
                      form.setValue("crop_id", crops.id);
                      setOpen(false);
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
                      setOpen(false);
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

export default SelectCrop;
