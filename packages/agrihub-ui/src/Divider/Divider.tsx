import React from "react";
import Typography from "../Typography/Typography";

type BaseDivderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface DividerProps extends BaseDivderProps {
  label: string;
  color: string;
}

export default function Divider({
  label,
  color = "#00000034",
  ...props
}: Partial<DividerProps>) {
  if (label) {
    return (
      <div className="flex items-center" {...props}>
        <div
          className="w-full rounded-full"
          style={{ height: "2px", backgroundColor: color }}
        ></div>
        <Typography.Medium
          {...{ label }}
          size="base"
          color="#00000094"
          className="px-4"
        />
        <div
          className="w-full rounded-full"
          style={{ height: "2px", backgroundColor: color }}
        ></div>
      </div>
    );
  }

  return (
    <div {...props}>
      <div
        className="w-full rounded-full"
        style={{ height: "2px", backgroundColor: color }}
      ></div>
    </div>
  );
}
