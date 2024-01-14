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
      className="flex flex-col max-w-[20rem] w-full h-40 border rounded-md p-2 hover:shadow-md cursor-pointer"
    >
      <span className="font-poppins-medium">{title}</span>
      <p className="text-sm my-auto line-clamp-4">{description}</p>
      <span className="text-sm">{questionTotal} questions</span>
    </Link>
  );
};

export default TagCard;
