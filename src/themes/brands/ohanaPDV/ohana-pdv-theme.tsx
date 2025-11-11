import { GlobalColors, globalColors } from "../../base/colors";

export const ohanaPDVColors: GlobalColors = {
  ...globalColors,
  primary: {
    main: "#D09822",
    light: "#EEDB81",
    dark: "#B8860B",
  },
  secondary: {
    main: "#D09822",
    light: "#EEDB81",
    dark: "#B8860B",
  },
  text: {
    primary: "#282828",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "#959595",
    divider: "#rgba(0, 0, 0, 0.12)",
  },
  customBackground: {
    main: "#282828",
    light: "#ffffff",
    // dark: "rgba(0, 0, 0, 0.24)",
    dark: "#1C1C1C",
    default: "#959595",
  },
};

export const ohanaPDVTheme = {
  colors: ohanaPDVColors,
};
