import { ComponentProps } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface BackButtonProps extends ComponentProps<"button"> {
  title?: string;
}

const BackButton = ({ className, title }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`flex items-center gap-x-2 w-max text-foreground font-poppins-semibold hover:bg-accent p-3 border rounded-xl duration-200 ${className}`}
      onClick={() => navigate(-1)}
    >
      <FaArrowLeftLong size={17} /> {title}
    </button>
  );
};

export default BackButton;
