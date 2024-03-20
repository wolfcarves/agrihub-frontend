import { ComponentProps } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface BackButtonProps extends ComponentProps<"button"> {}

const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`flex items-center gap-x-2 w-max text-foreground font-poppins-semibold hover:underline hover:underline-offset-2 py-1 px-3 border rounded-lg duration-200 ${className}`}
      onClick={() => navigate(-1)}
    >
      <FaArrowLeftLong /> Back
    </button>
  );
};

export default BackButton;
