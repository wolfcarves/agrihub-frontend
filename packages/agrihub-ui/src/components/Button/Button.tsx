import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Typography from "../Typography/Typography";
import loader from "./loader.svg";

const buttonStyles = {
  primary:
    "rounded-full border w-full h-11 text-sm bg-[#10D6B6] hover:bg-[#10D6B6]/70 duration-100",
  secondary:
    "rounded-full border w-full h-11 text-sm hover:bg-[#f0f0f0] duration-100",
  disbaled: "rounded-full w-full h-11 border text-sm opacity-75 bg-[#f0f0f0]"
} as const;

type ButtonVariants = keyof typeof buttonStyles;

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariants;
  label?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  label,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`relative ${buttonStyles[variant]} ${className}`}
    >
      {label ? label : children}
    </button>
  );
}
