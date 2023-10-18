import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Typography from "../Typography/Typography";

type ButtonVariants = "primary" | "secondary";

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariants;
  label?: string;
}

export default function Button({
  children,
  variant,
  label,
  ...props
}: ButtonProps) {
  const buttonStyles = {
    primary: "rounded-full border w-full py-2.5 px-4 bg-[#10D6B6]",
    secondary: "rounded-full border w-full py-2.5 px-4",
    tertiary: "rounded-full border w-full py-2.5 px-4 bg-[#10D6B6]",
    default: "rounded-full border w-full py-2.5 px-4 bg-[#10D6B6]"
  };

  switch (variant) {
    case "primary":
      return (
        <button {...props} className={buttonStyles[variant]}>
          {label ? <Typography.Medium {...{ label }} color="blue" /> : children}
        </button>
      );

    case "secondary":
      return (
        <button {...props} className={buttonStyles[variant]}>
          {label ? <Typography.Medium {...{ label }} color="red" /> : children}
        </button>
      );
    default:
      return (
        <button {...props} className={buttonStyles.primary}>
          {label ? <Typography.Medium {...{ label }} color="pink" /> : children}
        </button>
      );
  }
}
