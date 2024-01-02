import { AiOutlineLoading } from "react-icons/ai";

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const LoadingSpinner = ({ className }: BaseDivProps) => {
  return (
    <div
      className={`${className} animate-spin w-max h-max text-primary text-5xl`}
    >
      <AiOutlineLoading />
    </div>
  );
};

export default LoadingSpinner;
