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
import { cn } from "../../../lib/utils";
import { ReportRequestBody } from "../../../../api/openapi";
import { UseFormSetValue } from "react-hook-form";
import { ScrollArea } from "../../../ui/scroll-area";
import useGetProblemFarmSelectList from "../../../../hooks/api/get/useGetProblemFarmSelectList";

interface SelectCropProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<ReportRequestBody>;
  };
  other?: boolean;
}
const SelectProblem: React.FC<SelectCropProps> = ({ field, form, other }) => {
  // const { data: farmCrops } = useGetCropsQuery();
  const { data: farmProblems } = useGetProblemFarmSelectList({
    filter: "common"
  });
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
              ? farmProblems?.data?.find(problem => problem.id === field.value)
                  ?.problem
              : field.value === ""
              ? "Others"
              : "Select Problem"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[21rem] p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Search Problem..." />

            <CommandEmpty className="py-1">
              <p
                onClick={() => {
                  form.setValue("problem_id", "");
                  setOpen(false);
                }}
                className=" cursor-pointer hover:bg-[#F1F5F9] py-2 text-center text-sm "
              >
                Add Problem Crop
              </p>
            </CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[40vh] overflow-y-auto custom-scroll touch-auto">
                {farmProblems?.data?.map(problem => (
                  <CommandItem
                    value={problem.problem}
                    key={problem.problem}
                    onSelect={() => {
                      form.setValue("problem_id", problem.id);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        problem.id === field.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {problem.problem}
                  </CommandItem>
                ))}
                {other && (
                  <CommandItem
                    value="Others"
                    onSelect={() => {
                      form.setValue("problem_id", "");
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

export default SelectProblem;
