import React, { FC, useMemo } from "react";
import useFontSize, { FontSizesProps } from "./useFontSize";

type BaseTypographyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TypographyProps extends BaseTypographyProps {
  children?: React.ReactNode;
  label?: string | number;
  size?: FontSizesProps;
  customSize?: string;
  color?: string;
  weight?: number;
  italic?: boolean;
}

const H1: FC<TypographyProps> = ({
  children,
  label,
  size,
  customSize,
  weight,
  italic,
  color: fontColor,
  ...props
}): JSX.Element => {
  const style = useMemo(
    () => ({
      fontSize: useFontSize(size ?? customSize),
      color: fontColor,
      fontWeight: weight
    }),
    [fontColor, size, weight]
  );

  if (italic) {
    return (
      <i>
        <h1 {...{ style }} {...props}>
          {children ?? label}
        </h1>
      </i>
    );
  }

  return (
    <h1 {...{ style }} {...props}>
      {children ?? label}
    </h1>
  );
};

const P: FC<TypographyProps> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor,
  weight,
  italic,
  ...props
}): JSX.Element => {
  const style = useMemo(
    () => ({
      fontSize: useFontSize(size ?? customSize),
      color: fontColor,
      fontWeight: weight
    }),
    [fontColor, size, weight]
  );

  if (italic) {
    return (
      <i>
        <p {...{ style }} {...props}>
          {children ?? label}
        </p>
      </i>
    );
  }

  return (
    <p {...{ style }} {...props}>
      {children ?? label}
    </p>
  );
};

export default { H1, P };
