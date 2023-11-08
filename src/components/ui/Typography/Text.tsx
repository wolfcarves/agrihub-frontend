import { CSSProperties } from "react";
import { FontSize, FontWeight } from "../Theme/types";
import { useTypography } from "./useTypography";

type BaseTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TextProps extends BaseTextProps {
  $title?: string;
  $size?: FontSize;
  $weight?: FontWeight;
  $align?: CSSProperties["alignItems"];
}

const H1 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h1 className={`${fontSize ?? "text-3xl"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h1>
  );
};

const H2 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h2 className={`${fontSize ?? "text-2xl"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h2>
  );
};

const H3 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h3 className={`${fontSize ?? "text-xl"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h3>
  );
};

const H4 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h4 className={`${fontSize ?? "text-lg"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h4>
  );
};

const H5 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h5 className={`${fontSize ?? "text-md"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h5>
  );
};

const H6 = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <h6 className={`${fontSize ?? "text-base"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </h6>
  );
};

const P = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <p className={`${fontSize ?? "text-base"} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </p>
  );
};

const Span = ({
  children,
  $title,
  $size,
  $align,
  $weight,
  ...props
}: TextProps) => {
  const { fontSize, align, weight } = useTypography($size, $align, $weight);

  return (
    <span className={`${fontSize} ${align} ${weight}`} {...props}>
      {$title ?? children}
    </span>
  );
};

export default { H1, H2, H3, H4, H5, H6, P, Span };
