import { useMemo } from "react";
import { twClasses } from "../Theme/tw";

const classes = twClasses;

export const useTypography = (
  size?: string,
  color?: string,
  align?: string,
  weight?: string
) => {
  return useMemo(() => {
    return {
      fontSize: size ? `text-${size}` : undefined,
      color: color ? `text-${color}` : undefined,
      align: align ? `text-${align}` : undefined,
      weight: weight ? `font-${weight}` : undefined
    };
  }, [size, color, align, weight]);
};
