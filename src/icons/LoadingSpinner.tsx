import { AiOutlineLoading } from "react-icons/ai";

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const LoadingSpinner = ({ className }: BaseDivProps) => {
  return (
    <div className={`animate-spin w-max h-max text-5xl ${className} `}>
      <AiOutlineLoading />
    </div>
  );
};

export default LoadingSpinner;
