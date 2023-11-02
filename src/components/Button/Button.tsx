import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const buttonStyles = {
  primary: "rounded-full h-[55px] bg-primary-1 text-[#FFFFF] w-full text-base",
  outlined:
    "rounded-full h-[55px] border border-gray-1 text-black-1 w-full text-base",
  borderless: "rounded-full h-[55px] text-black-1 w-fulltext-base",
  disabled: "rounded-full h-11 border opacity-75 bg-[#f0f0f0] w-fulltext-base"
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
}

export default function Button({
  children,
  variant = "primary",
  label,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${buttonStyles[variant]} flex items-center justify-center`}
    >
      <i className="text-xl -ms-4 me-2">{icon}</i>
      {label}
      {children}
    </button>
  );
}
