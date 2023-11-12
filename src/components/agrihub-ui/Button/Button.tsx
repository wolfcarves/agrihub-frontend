import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { BiChevronRight } from "react-icons/bi";

import LoadingSpinner from "@icons/LoadingSpinner";
import useColorScheme from "@hooks/useColorScheme";

const buttonStyles = {
  variants: {
    primary:
      "rounded-full text-white bg-primary-3 hover:opacity-90 duration-100",
    outlined:
      "rounded-full border border-gray-1 text-black-1 hover:bg-gray-1/20 hover:border-gray-1/20 duration-100"
  },
  sizes: {
    xs: "text-xs h-[24px] px-4",
    sm: "text-sm h-[30px] px-5",
    base: "text-base h-[40px] px-5",
    lg: "text-base h-[55px] px-5"
  },
  disabled: {
    primary: "rounded-full bg-gray-3 text-gray-1 cursor-not-allowed",
    outlined:
      "rounded-full border border-gray-1/20 text-gray-1 cursor-not-allowed"
  }
} as const;

type ButtonVariants = keyof typeof buttonStyles.variants;
type ButtonSizes = keyof typeof buttonStyles.sizes;

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  $variant?: ButtonVariants;
  $size?: ButtonSizes;
  $title?: string;
  $icon?: ReactNode | JSX.Element;
  $fullWidth?: boolean;
  $withArrow?: boolean;
  $disabled?: boolean;
  $isLoading?: boolean;
}

const ButtonArrow = (props: { size: ButtonSizes }) => {
  const arrowStyles = {
    xs: "text-sm right-1",
    sm: "text-md right-1",
    base: "text-md right-1",
    lg: "text-lg right-3"
  };

  return (
    <i className={`${arrowStyles[props.size]} absolute`}>
      <BiChevronRight />
    </i>
  );
};

export default function Button({
  children,
  $variant = "primary",
  $size = "base",
  $title,
  $icon,
  $fullWidth,
  $withArrow,
  className,
  $disabled,
  $isLoading,
  ...props
}: ButtonProps) {
  const colorScheme = useColorScheme();

  const _variant = $disabled
    ? buttonStyles.disabled[$variant]
    : buttonStyles.variants[$variant];
  const _size = buttonStyles.sizes[$size];
  const _width = $fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={`${_variant} ${_size} ${_width} ${className} relative flex justify-center items-center`}
      disabled={$disabled}
      {...props}
    >
      {$isLoading && <LoadingSpinner />}

      {$title ?? children}
      {$withArrow && <ButtonArrow size={$size} />}
    </button>
  );
}
