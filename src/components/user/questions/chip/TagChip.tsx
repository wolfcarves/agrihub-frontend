interface TagChipProps {
  name?: string;
  size?: "sm" | "base";
}

const TagChip = ({ name, size = "base" }: TagChipProps) => {
  if (size === "base") {
    return (
      <span className="text-base text-primary rounded-xl border border-[#BBE3AD] bg-secondary px-4 py-1">
        {name}
      </span>
    );
  }

  if (size == "sm") {
    return (
      <span className="text-sm text-primary rounded-lg border border-[#BBE3AD] bg-secondary px-2 py-0.5">
        {name}
      </span>
    );
  }
};

export default TagChip;
