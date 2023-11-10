import { AiOutlineLoading } from "react-icons/ai";
import { Colors, FontSize } from "@components/ui/Theme/types";

const LoadingSpinner = (props: { size?: FontSize; color?: Colors }) => {
  return (
    <AiOutlineLoading
      className={`animate-spin text-${props.size ?? "lg"} text-${
        props.color
      }  w-max h-max mx-2`}
    />
  );
};

export default LoadingSpinner;
