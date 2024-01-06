import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

const sortOptions = [
  {
    label: "Newest",
    value: "newest"
  },
  {
    label: "Active",
    value: "active"
  },
  {
    label: "Trending",
    value: "trending"
  }
] as const;

export type SortValues = (typeof sortOptions)[number]["value"];

interface QuestionsFilterProps {
  selected: SortValues;
  onFilterChange?: (selectedValue: SortValues) => void;
}

function QuestionsFilterSelect({
  selected,
  onFilterChange,
  ...props
}: QuestionsFilterProps) {
  return (
    <div className="ms-auto py-10">
      <Select onValueChange={onFilterChange} {...props}>
        <SelectTrigger className="w-[120px] rounded-lg text-foreground font-poppins-medium capitalize h-11 bg-white">
          <SelectValue placeholder={selected ?? sortOptions[0].label} />
        </SelectTrigger>

        <SelectContent>
          {sortOptions.map(({ label, value }) => (
            <SelectItem
              key={`${value}`}
              value={value}
              className="text-foreground font-poppins-medium cursor-pointer"
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default QuestionsFilterSelect;
