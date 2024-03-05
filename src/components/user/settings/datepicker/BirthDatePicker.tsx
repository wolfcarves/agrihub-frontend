import "react-day-picker/dist/style.css";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import { Calendar } from "@components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@components/ui/popover";
import { IoCalendarClearOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";
import { SelectSingleEventHandler } from "react-day-picker";

const BirthDatePicker = () => {
  const user = useAuth();

  const [date, setDate] = useState<Date>(
    new Date(user?.data?.birthdate ?? "") ?? null
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <IoCalendarClearOutline className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate as SelectSingleEventHandler}
          initialFocus
          pagedNavigation
          showOutsideDays={false}
          captionLayout="dropdown-buttons"
          fromYear={1960}
          toYear={2010}
          classNames={{
            caption_label: "flex items-center text-sm font-medium",
            dropdown: "rdp-dropdown bg-[red] border border-red-500",
            dropdown_icon: "ml-2",
            dropdown_month: "border p-1 rounded-sm cursor-pointer",
            dropdown_year:
              "rdp-dropdown_year ml-3 border p-1 rounded-sm cursor-pointer",
            button: "",
            button_reset: ""
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default BirthDatePicker;
