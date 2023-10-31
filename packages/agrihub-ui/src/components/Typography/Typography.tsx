import {
  useMemo,
  CSSProperties,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes
} from "react";
import { theme, FontSize, ColorType, FontWeight } from "../Theme/theme";

type BaseTypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TypographyProps extends BaseTypographyProps {
  children?: ReactNode;
  $label?: string | number;
  $color?: ColorType;
  $size?: FontSize;
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
  $label,
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
      {children ?? $label}
    </h1>
  );
};

const H2 = ({
  children,
  $label,
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
      {children ?? $label}
    </h2>
  );
};

const H3 = ({
  children,
  $label,
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
      {children ?? $label}
    </h3>
  );
};

const H4 = ({
  children,
  $label,
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
      {children ?? $label}
    </h4>
  );
};

const H5 = ({
  children,
  $label,
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
      {children ?? $label}
    </h5>
  );
};

const H6 = ({
  children,
  $label,
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
      {children ?? $label}
    </h6>
  );
};

const Span = ({
  children,
  $label,
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
      {children ?? $label}
    </span>
  );
};

const P = ({
  children,
  $label,
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
      {children ?? $label}
    </p>
  );
};

export default { H1, H2, H3, H4, H5, H6, Span, P };
