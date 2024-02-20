"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@components/lib/utils";
import { Button } from "@components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@components/ui/popover";

const socialmedia = [
  {
    value: "facebook",
    label: "Facebook"
  },
  {
    value: "youtube",
    label: "YouTube"
  },
  {
    value: "tiktok",
    label: "TikTok"
  },
  {
    value: "instagram",
    label: "Instagram"
  },
  {
    value: "twitter",
    label: "Twitter X"
  }
];

export function ComboboxSocialMedia() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? socialmedia.find(socialmedia => socialmedia.value === value)
                ?.label
            : "Select media..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {socialmedia.map(socialmedia => (
              <CommandItem
                key={socialmedia.value}
                value={socialmedia.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === socialmedia.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {socialmedia.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
