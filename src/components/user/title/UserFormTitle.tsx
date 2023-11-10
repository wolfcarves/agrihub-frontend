import { Typography } from "@components-ui";
import { FontSize } from "src/components/ui/Theme/types";

type BaseDivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface UserFormTitleProps extends BaseDivType {
  title: string;
  description?: string;
  center?: boolean;
  size?: FontSize;
  step?: string;
}

const UserFormTitle = ({
  title,
  description,
  center,
  size,
  step,
  ...props
}: UserFormTitleProps) => {
  return (
    <div {...props}>
      {step && (
        <Typography.Span $title={`Step ${step} of 2`} $weight="medium" />
      )}
      <div className={center ? "text-center" : "text-auto"}>
        <div>
          <Typography.H2 $title={title} $weight="normal" $size={size} />
        </div>
        <div className="my-4">
          <Typography.Span $title={description} $weight="normal" $size={"md"} />
        </div>
      </div>
    </div>
  );
};

export default UserFormTitle;
