import React, { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { UseFormSetValue } from "react-hook-form";

import { useParams } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "../../../../ui/command";
import { NewHarvestTask, NewPlantTask } from "../../../../../api/openapi";
import useGetFarmMembersQuery from "../../../../../hooks/api/get/useGetFarmMembersQuery";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../../../ui/popover";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../../ui/button";
import { ScrollArea } from "../../../../ui/scroll-area";
import useGetCommunityFarmReportsCropReports from "../../../../../hooks/api/get/useGetCommunityFarmReportsCropReports";
import { format } from "date-fns";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";

interface SelectCropProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<NewPlantTask>;
  };
}
const SelectCropPlant: React.FC<SelectCropProps> = ({ field, form }) => {
  const { id } = useParams();
  const { data: cropData } = useGetFarmCropsQuery(id || "");
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
              ? cropData?.find(crop => crop.id === field.value)?.name
              : "Select Crop"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[21rem] p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Search crop..." />

            <CommandEmpty className="py-1">
              <p className=" cursor-pointer hover:bg-[#F1F5F9] py-2 text-center text-sm ">
                No crop available
              </p>
            </CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[40vh] overflow-y-auto custom-scroll touch-auto">
                {cropData?.map(crop => (
                  <CommandItem
                    value={crop.id}
                    key={crop.id}
                    onSelect={() => {
                      form.setValue("crop_id", crop?.id || "");
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        crop.id === field.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {crop.name}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectCropPlant;
