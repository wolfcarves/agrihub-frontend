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

type IconType = keyof typeof Icons;

const IconSelector = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const renderIcon = useMemo(
    () => (icon: IconType) => {
      const IconComponent = Icons[icon];
      if (IconComponent) {
        return <IconComponent size={15} />;
      } else {
        // console.error(`Icon '${icon}' is not found.`);
        return null;
      }
    },
    []
  );
  const commandItems = useMemo(
    () =>
      IconsItems.map(icon => (
        <CommandItem
          key={icon}
          value={icon}
          onSelect={currentValue => {
            setValue(currentValue === value ? "" : icon);
            setOpen(false);
          }}
          className="flex gap-1 items-center"
        >
          {renderIcon(icon as IconType)} {icon}
          <CheckIcon
            className={cn(
              "ml-auto h-4 w-4",
              value === icon ? "opacity-100" : "opacity-0"
            )}
          />
        </CommandItem>
      )),
    [IconsItems, renderIcon, setOpen, setValue, value]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[50%] justify-between"
        >
          {value ? (
            <>
              {renderIcon(value as IconType)}
              {value}
            </>
          ) : (
            "Select icon..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
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
