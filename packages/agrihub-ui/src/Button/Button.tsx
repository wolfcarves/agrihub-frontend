import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type BaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return <button {...props}>{children}</button>;
}
