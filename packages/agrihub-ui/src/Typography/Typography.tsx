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
}

const Light: FC<Omit<TypographyProps, "weight">> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);

  return (
    <h1 style={{ ...{ fontSize, color } }} {...props}>
      {children ?? label}
    </h1>
  );
};

const Medium: FC<Omit<TypographyProps, "weight">> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);

  return (
    <h1 style={{ ...{ fontSize, fontWeight: 300, color } }} {...props}>
      {children ?? label}
    </h1>
  );
};

const Regular: FC<Omit<TypographyProps, "weight">> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);

  return (
    <h1 style={{ ...{ fontSize, fontWeight: 400, color } }} {...props}>
      {children ?? label}
    </h1>
  );
};

const SemiBold: FC<Omit<TypographyProps, "weight">> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);

  return (
    <h1 style={{ ...{ fontSize, fontWeight: 500, color } }} {...props}>
      {children ?? label}
    </h1>
  );
};

const Bold: FC<Omit<TypographyProps, "weight">> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);

  return (
    <h1 style={{ ...{ fontSize, fontWeight: 600, color } }} {...props}>
      {children ?? label}
    </h1>
  );
};

const P: FC<TypographyProps> = ({
  children,
  label,
  size,
  customSize,
  color: fontColor = "#000000",
  weight,
  ...props
}): JSX.Element => {
  const fontSize = useFontSize(size ?? customSize);
  const color = useMemo(() => fontColor, [fontColor]);
  const fontWeight = useMemo(() => weight, [fontColor]);

  return (
    <p style={{ ...{ fontSize, fontWeight, color } }} {...props}>
      {children ?? label}
    </p>
  );
};

export default { Light, Medium, Regular, SemiBold, Bold, P };
