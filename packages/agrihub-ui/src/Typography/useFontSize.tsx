const fontSizes = [
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl"
] as const;

export type FontSizesProps = (typeof fontSizes)[number];

export type useFontSizeProps = (
  size: FontSizesProps | undefined | string
) => string;

const useFontSize: useFontSizeProps = size => {
  return size === "xs"
    ? "0.625rem"
    : size === "sm"
    ? "0.75rem"
    : size === "base"
    ? "0.875rem"
    : size === "md"
    ? "1.125rem"
    : size === "lg"
    ? "1.5rem"
    : size === "xl"
    ? "1.875rem"
    : size === "2xl"
    ? "2.25rem"
    : size === "3xl"
    ? "3rem"
    : size === "4xl"
    ? "3.75rem"
    : size === "5xl"
    ? "4.5rem"
    : size === "6xl"
    ? "6rem"
    : (size as string);
};

export default useFontSize;
