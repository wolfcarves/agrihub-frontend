import React from "react";

type BaseDivderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface DividerProps extends BaseDivderProps {
  $title: string;
  $color: string;
}

export default function Divider({
  $title,
  $color = "#00000034",
  ...props
}: Partial<DividerProps>) {
  if ($title) {
    return (
      <div className="flex items-center" {...props}>
        <div
          className="w-full rounded-full"
          style={{ height: "1px", backgroundColor: $color }}
        ></div>
        <div className="mx-5">
          <span>{$title}</span>
        </div>
        <div
          className="w-full rounded-full"
          style={{ height: "1px", backgroundColor: $color }}
        ></div>
      </div>
    );
  }

  return (
    <div {...props}>
      <div
        className="w-full rounded-full"
        style={{ height: "1px", backgroundColor: $color }}
      ></div>
    </div>
  );
}
