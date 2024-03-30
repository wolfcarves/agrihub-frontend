import { Link } from "react-router-dom";

interface TagChipProps {
  to: string;
  name?: string;
  size?: "sm" | "base";
}

const TagChip = ({ to, name, size = "base" }: TagChipProps) => {
  if (size === "base") {
    return (
      <Link to={to}>
        <span className="text-base text-primary rounded-xl border border-[#BBE3AD] bg-secondary px-4 py-1">
          {name}
        </span>
      </Link>
    );
  }

  if (size == "sm") {
    return (
      <Link to={to}>
        <span className="text-sm text-primary rounded-lg border border-[#BBE3AD] bg-secondary px-2 py-0.5">
          {name}
        </span>
      </Link>
    );
  }
};

export default TagChip;
