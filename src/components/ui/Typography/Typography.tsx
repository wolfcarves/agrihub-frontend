import {
  useMemo,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes
} from "react";
import { theme } from "../Theme/theme";
import { FontSize, Colors, FontWeight } from "../Theme/types";

type BaseTypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TypographyProps extends BaseTypographyProps {
  $title?: string | number;
  $color?: Colors;
  $size?: FontSize;
  $xs?: FontSize;
  $sm?: FontSize;
  $md?: FontSize;
  $lg?: FontSize;
  $xl?: FontSize;
  $weight?: FontWeight;
  $transform?: CSSProperties["textTransform"];
  $align?: CSSProperties["textAlign"];
  $whiteSpace?: CSSProperties["whiteSpace"];
  $lineHeight?: CSSProperties["lineHeight"];
  $fontStyle?: CSSProperties["fontStyle"];
  $width?: CSSProperties["width"];
}

const useStyles = (value: CSSProperties) => {
  return useMemo(() => {
    return value;
  }, [value]);
};

const H1 = ({
  children,
  $title,
  $color = "black-1",
  $size = "3xl",
  $weight = "600",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h1 {...{ style }} {...props}>
      {children ?? $title}
    </h1>
  );
};

const H2 = ({
  children,
  $title,
  $color = "black-1",
  $size = "2xl",
  $weight = "600",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h2 {...{ style }} {...props}>
      {children ?? $title}
    </h2>
  );
};

const H3 = ({
  children,
  $title,
  $color = "black-1",
  $size = "xl",
  $weight = "500",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h3 {...{ style }} {...props}>
      {children ?? $title}
    </h3>
  );
};

const H4 = ({
  children,
  $title,
  $color = "black-1",
  $size = "lg",
  $weight = "500",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h4 {...{ style }} {...props}>
      {children ?? $title}
    </h4>
  );
};

const H5 = ({
  children,
  $title,
  $color = "black-1",
  $size = "md",
  $weight = "400",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h5 {...{ style }} {...props}>
      {children ?? $title}
    </h5>
  );
};

const H6 = ({
  children,
  $title,
  $color = "black-1",
  $size = "base",
  $weight = "400",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <h6 {...{ style }} {...props}>
      {children ?? $title}
    </h6>
  );
};

const Span = ({
  children,
  $title,
  $color = "black-1",
  $size = "base",
  $weight = "400",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <span {...{ style }} {...props}>
      {children ?? $title}
    </span>
  );
};

const P = ({
  children,
  $title,
  $color = "black-1",
  $size = "base",
  $weight = "400",
  $transform,
  $align,
  $lineHeight,
  $whiteSpace,
  $fontStyle,
  $width,
  ...props
}: TypographyProps) => {
  const style = useStyles({
    color: theme.colors["light"][$color],
    fontSize: theme.fontSize[$size],
    fontWeight: $weight,
    textTransform: $transform,
    textAlign: $align,
    whiteSpace: $whiteSpace,
    lineHeight: $lineHeight,
    fontStyle: $fontStyle,
    width: $width
  });

  return (
    <p {...{ style }} {...props}>
      {children ?? $title}
    </p>
  );
};

export default { H1, H2, H3, H4, H5, H6, Span, P };
