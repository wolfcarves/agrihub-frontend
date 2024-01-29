import { Link } from "react-router-dom";

interface TagCardProps {
  id?: string;
  title?: string;
  description?: string;
  questionTotal?: string;
}

const TagCard = ({ id, title, description, questionTotal }: TagCardProps) => {
  return (
    <Link
      to={`/forum?tag=${title}`}
      className="flex flex-col max-w-[20rem] w-full border rounded-sm px-4 py-4 hover:shadow-md cursor-pointer"
    >
      <span>
        <span className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1">
          {title}
        </span>
      </span>
      <p className="text-sm my-2 line-clamp-4">{description}</p>
      <span className="text-sm">{questionTotal} questions</span>
    </Link>
  );
};

export default TagCard;
