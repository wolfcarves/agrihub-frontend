import twTheme from "../../../../tailwind.config";

export const theme = {
  screens: twTheme.screens,
  container: twTheme.container,
  fontSize: twTheme.theme.extend.fontSize,
  fontWeight: twTheme.theme.extend.fontWeight,
  colors: {
    light: twTheme.theme.extend.colors,
    dark: {
      "primary-1": "#101010"
    }
  }
} as const;
