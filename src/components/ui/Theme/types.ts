import { theme } from "./theme";

export type FontSize = keyof typeof theme.fontSize;
export type FontWeight =
  (typeof theme.fontWeight)[keyof typeof theme.fontWeight];
export type Colors = keyof typeof theme.colors.light;
