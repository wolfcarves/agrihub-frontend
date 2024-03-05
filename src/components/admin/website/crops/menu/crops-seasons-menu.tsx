import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface CropSeasonsMenuProps {
  selectedMonthValues: string[];
  onSelectedMonthValuesChange: (selectedMonthValues: string[]) => void;
}

const months = [
  { value: "0", label: "January" },
  { value: "1", label: "February" },
  { value: "2", label: "March" },
  { value: "3", label: "April" },
  { value: "4", label: "May" },
  { value: "5", label: "June" },
  { value: "6", label: "July" },
  { value: "7", label: "August" },
  { value: "8", label: "September" },
  { value: "9", label: "October" },
  { value: "10", label: "November" },
  { value: "11", label: "December" }
];

export function CropSeasonsMenu({
  selectedMonthValues,
  onSelectedMonthValuesChange
}: CropSeasonsMenuProps) {
  const handleMonthToggle = (monthValue: string, checked: boolean) => {
    const updatedMonthValues = checked
      ? [...selectedMonthValues, monthValue]
      : selectedMonthValues.filter(
          selectedMonthValue => selectedMonthValue !== monthValue
        );
    onSelectedMonthValuesChange(updatedMonthValues);
  };

  const allMonthsSelected = selectedMonthValues.length === months.length;
  console.log(selectedMonthValues, "selected from component");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-wrap">
          {allMonthsSelected
            ? "All Season"
            : selectedMonthValues.length === 0
            ? "Months"
            : selectedMonthValues
                .map(
                  monthValue =>
                    months.find(month => month.value === monthValue)?.label
                )
                .join(", ")}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Seedling Season</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {months.map(month => (
          <DropdownMenuCheckboxItem
            key={month.value}
            checked={selectedMonthValues.includes(month.value)}
            onCheckedChange={checked => handleMonthToggle(month.value, checked)}
          >
            {month.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
