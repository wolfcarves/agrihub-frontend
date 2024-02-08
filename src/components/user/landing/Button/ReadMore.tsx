import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ReadMoreButtonProps {
  text: string;
  to: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    navigate(to);
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 rounded transition duration-300">
        {text}
      </span>
      <IoIosArrowForward className="text-orange-500" />
    </div>
  );
};

export default ReadMoreButton;
