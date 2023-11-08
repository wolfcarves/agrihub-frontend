import { Typography } from "@components-ui";
import { FontSize } from "src/components/ui/Theme/types";

type BaseDivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface UserFormTitleProps extends BaseDivType {
  title: string;
  center?: boolean;
  size?: FontSize;
  step?: string;
}

const UserFormTitle = ({
  title,
  center,
  size,
  step,
  ...props
}: UserFormTitleProps) => {
  return (
    <div {...props}>
      {step && (
        <Typography.Span
          $title={`Step ${step} of 2`}
          $size="sm"
          $weight="500"
        />
      )}
      <Typography.H2
        $title={title}
        $weight="600"
        $size={size}
        $align={center ? "center" : "start"}
      />
    </div>
  );
};

export default UserFormTitle;
