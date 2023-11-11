import { ReactNode } from "react";

interface CardProps {
  $children: ReactNode;
  $variant: string;
}

const Card = ({ $children, $variant }: CardProps) => {
  return <div>{$children}</div>;
};

export default Card;
