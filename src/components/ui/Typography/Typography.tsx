import { CSSProperties } from "react";
import { Colors, FontSize, FontWeight } from "../Theme/types";
import { useTypography } from "./useTypography";

type BaseTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TextProps extends BaseTextProps {
  $title?: string;
  $color?: Colors;
  $size?: FontSize;
  $sizeMd?: FontSize;
  $sizeLg?: FontSize;
  $sizeXl?: FontSize;
  $weight?: FontWeight;
  $align?: CSSProperties["alignItems"];
}

const H1 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h1
      className={`${
        fontSize ?? "text-3xl"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h1>
  );
};

const H2 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h2
      className={`${
        fontSize ?? "text-2xl"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h2>
  );
};

const H3 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h3
      className={`${
        fontSize ?? "text-xl"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h3>
  );
};

const H4 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h4
      className={`${
        fontSize ?? "text-lg"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h4>
  );
};

const H5 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h5
      className={`${
        fontSize ?? "text-md"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h5>
  );
};

const H6 = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <h6
      className={`${
        fontSize ?? "text-base"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </h6>
  );
};

const P = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <p
      className={`${
        fontSize ?? "text-base"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </p>
  );
};

const Span = ({
  children,
  $title,
  $color,
  $size,
  $align,
  $weight,
  $sizeMd,
  $sizeLg,
  $sizeXl,
  className,
  ...props
}: TextProps) => {
  const { fontSize, color, align, weight } = useTypography(
    $size,
    $color,
    $align,
    $weight
  );

  return (
    <span
      className={`${
        fontSize ?? "text-base"
      } ${color} ${align} ${weight} md:text-${$sizeMd} lg:text-${$sizeLg} xl:text-${$sizeXl} ${className}`}
      {...props}
    >
      {$title ?? children}
    </span>
  );
};

export default { H1, H2, H3, H4, H5, H6, P, Span };
