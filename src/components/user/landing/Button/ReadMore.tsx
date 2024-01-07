import { IoIosArrowForward } from "react-icons/io";

interface ReadMoreButtonProps {
  text: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 rounded transition duration-300">
        {text}
      </span>
      <IoIosArrowForward className=" text-orange-500" />
    </div>
  );
};

export default ReadMoreButton;