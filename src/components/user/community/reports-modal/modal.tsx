import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { Form } from "../../../ui/form";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import useGetCrops from "../../../../hooks/api/get/useGetCrops";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "../../../ui/command";
import { cn } from "../../../lib/utils";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent
} from "../../../ui/select";
import months from "./months.json";
const CropReportModal = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data } = useGetCrops();
  console.log(data);

  return (
    <Dialog>
      <DialogTrigger className="bg-primary p-2 rounded-md text-white">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crops Report</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          <div className="">
            <Label>Crops Name</Label>
            <div className="">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between "
                  >
                    {value
                      ? data?.find(crops => crops.id === value)?.name
                      : "Select crop..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className=" w-[21rem] p-0"
                  side="bottom"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Search crop..." />
                    <CommandEmpty>No crop found.</CommandEmpty>
                    <CommandGroup>
                      {data?.map(crops => (
                        <CommandItem
                          key={crops.id}
                          value={crops.id}
                          onSelect={currentValue => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === crops.id ? "opacity-100" : "opacity-0"
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
          </div>
          <div className="">
            <Label>Quantity</Label>
            <Input type="number" className="h-9 rounded-md" />
          </div>
          <div className="">
            <Label>Planting Date</Label>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, i) => (
                    <SelectItem key={i} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="">
            <Label>Expected Harvest Date</Label>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, i) => (
                    <SelectItem key={i} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="">
            <Label>Upload Photo</Label>
            <Input type="file" className="h-10" accept="image/*" multiple />
          </div>
          <div className="">
            <Label>Notes</Label>
            <Textarea placeholder="Type your notes here." />
          </div>

          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" variant="default">
              Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CropReportModal;
{
  /* <div className="">
            <Label>Quantity</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Planting Date</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Expected Harvest Date</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Upload Photo</Label>
            <Input type="file" accept="image/*" multiple />
          </div>
          <div className="">
            <Label>Notes</Label>
            <Textarea placeholder="Type your notes here." />
          </div> */
}
