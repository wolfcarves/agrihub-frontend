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
import { NewHarvestTask, ReportRequestBody } from "../../../../api/openapi";
import { UseFormSetValue } from "react-hook-form";
import { ScrollArea } from "../../../ui/scroll-area";
import useGetProblemFarmSelectList from "../../../../hooks/api/get/useGetProblemFarmSelectList";
import { useParams } from "react-router-dom";
import useGetFarmMembersQuery from "../../../../hooks/api/get/useGetFarmMembersQuery";

interface SelectCropProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<any>;
  };
}
const SelectMember: React.FC<SelectCropProps> = ({ field, form }) => {
  const { id } = useParams();
  const { data: MemberData } = useGetFarmMembersQuery({
    id: id || "",
    search: undefined,
    page: "1",
    perpage: "10000",
    filter: undefined
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
              ? `${MemberData?.members?.find(
                  member => member.id === field.value
                )?.firstname} ${MemberData?.members?.find(
                  member => member.id === field.value
                )?.firstname}`
              : "Select Member"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[21rem] p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Search Member..." />

            <CommandEmpty className="py-1">
              <p className=" cursor-pointer hover:bg-[#F1F5F9] py-2 text-center text-sm ">
                No member available
              </p>
            </CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[40vh] overflow-y-auto custom-scroll touch-auto">
                {MemberData?.members
                  ?.filter(member => member.role !== "farm_head")
                  .map(member => (
                    <CommandItem
                      value={member.id}
                      key={member.id}
                      onSelect={() => {
                        form.setValue("assigned_to", member.id);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          member.id === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {`${member.firstname} ${member.lastname}`}
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

export default SelectMember;
