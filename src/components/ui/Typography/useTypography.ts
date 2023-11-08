import { useMemo } from "react";

export const useTypography = (
  size?: string,
  align?: string,
  weight?: string
) => {
  const a = "font-600";

  return useMemo(() => {
    return {
      fontSize: `text-${size}`,
      align: `text-${align}`,
      weight: `font-${weight}`
    };
  }, [size, align, weight]);
};
