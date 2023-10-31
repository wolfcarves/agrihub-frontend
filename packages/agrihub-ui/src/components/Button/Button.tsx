import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Typography from "../Typography/Typography";

const buttonStyles = {
  primary: "rounded-full w-full h-[55px] text-sm bg-primary-1 text-[#FFFFFF]",
  outlined:
    "rounded-full w-full h-[55px] text-sm border-2 border-gray-1 text-black-1",
  borderless: "rounded-full w-full h-[55px] text-sm text-black-1",
  disabled: "rounded-full w-full h-11 border text-sm opacity-75 bg-[#f0f0f0]"
} as const;

type ButtonVariants = keyof typeof buttonStyles;

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariants;
  label?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  label,
  icon,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonStyles[variant]} ${className} flex items-center justify-center`}
    >
      <i className="text-xl -ms-4 me-2">{icon}</i>
      {label ? <Typography.H6 $label={label} /> : children}
    </button>
  );
}
