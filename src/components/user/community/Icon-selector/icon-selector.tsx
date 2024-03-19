import React, { useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import * as Icons from "react-icons/bi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "../../../ui/command";
import { cn } from "../../../lib/utils";
import { CheckIcon, ChevronsUpDown } from "lucide-react";

import { ScrollArea } from "../../../ui/scroll-area";
import { IconsItems } from "../../../../constants/icons";
import { UseFormSetValue } from "react-hook-form";
import { UpdateApproachRequest } from "../../../../api/openapi";
import { renderIcon } from "../../../lib/RenderIcon";

type IconType = keyof typeof Icons;
interface IconProps {
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  form: {
    setValue: UseFormSetValue<UpdateApproachRequest>;
  };
}
const IconSelector: React.FC<IconProps> = ({ field, form }) => {
  const [open, setOpen] = React.useState(false);

  const commandItems = useMemo(
    () =>
      IconsItems.map(icon => (
        <CommandItem
          key={icon}
          value={icon}
          onSelect={() => {
            form.setValue("icon", icon);

            setOpen(false);
          }}
          className="flex gap-1 items-center"
        >
          {renderIcon(icon as IconType)} {icon}
          <CheckIcon
            className={cn(
              "ml-auto h-4 w-4",
              field.value === icon ? "opacity-100" : "opacity-0"
            )}
          />
        </CommandItem>
      )),
    [IconsItems, renderIcon, setOpen, field]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[100%] justify-between",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value ? (
            <>
              {renderIcon(field.value as IconType)}
              {field.value}
            </>
          ) : (
            "Select icon..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput placeholder="Search icon..." className="h-9" />
          <CommandEmpty>No icon found. </CommandEmpty>
          <CommandGroup>
            <ScrollArea className="max-h-[300px] overflow-y-auto custom-scroll">
              {commandItems}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default IconSelector;
