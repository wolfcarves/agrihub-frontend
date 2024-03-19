import React from "react";

import * as Icons from "react-icons/bi";
type IconType = keyof typeof Icons;
interface RenderIconProps {
  size?: number;
}

export const renderIcon = (icon: IconType, props?: RenderIconProps) => {
  const { size = 15 } = props || {}; // Default size is 15 if not provided
  const IconComponent = Icons[icon];
  if (IconComponent) {
    return <IconComponent size={size} />;
  } else {
    // console.error(`Icon '${icon}' is not found.`);
    return null;
  }
};
