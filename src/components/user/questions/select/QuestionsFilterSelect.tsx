import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

const filterOptions = [
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

export type LabelValues = (typeof filterOptions)[number]["label"];

interface QuestionsFilterProps {
  selected: LabelValues;
  onFilterChange?: (selectedValue: LabelValues) => void;
}

function QuestionsFilterSelect({
  selected,
  onFilterChange,
  ...props
}: QuestionsFilterProps) {
  return (
    <div className="ms-auto">
      <Select onValueChange={onFilterChange} {...props}>
        <SelectTrigger className="w-[120px] rounded-lg text-neutral-700 font-poppins-medium capitalize h-11 bg-white">
          <SelectValue placeholder={selected ?? filterOptions[0].label} />
        </SelectTrigger>

        <SelectContent>
          {filterOptions.map(({ label, value }) => (
            <SelectItem
              key={`${value}`}
              value={value}
              className="text-neutral-700 font-poppins-medium cursor-pointer"
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
