import { Typography } from "@components-ui";
import { FontSize } from "src/components/Theme/theme";

const UserFormTitle = (props: {
  title: string;
  center?: boolean;
  size?: FontSize;
}) => {
  return (
    <div className={`mb-10`}>
      <Typography.H2
        $label={props.title}
        $weight="600"
        $size={props.size}
        $align={props.center ? "center" : "start"}
      />
    </div>
  );
};

export default UserFormTitle;
