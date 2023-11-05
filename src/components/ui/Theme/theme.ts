import twTheme from "../../../../tailwind.config";

export const theme = {
  screens: twTheme.screens,
  container: twTheme.container,
  fontSize: { ...twTheme.theme.extend.fontSize },
  fontWeight: twTheme.theme.extend.fontWeight,
  colors: {
    light: {
      ...twTheme.theme.extend.colors
    },
    dark: {
      //will set soon
    }
  }
} as const;
