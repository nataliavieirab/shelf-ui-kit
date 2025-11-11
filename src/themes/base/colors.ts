export interface GlobalColors {
  common: {
    black: string;
    white: string;
  };
  primary: {
    main: string;
    light: string;
    dark: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
  };
  error: {
    main: string;
    light: string;
    dark: string;
  };
  warning: {
    main: string;
    light: string;
    dark: string;
  };
  info: {
    main: string;
    light: string;
    dark: string;
  };
  success: {
    main: string;
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    divider: string;
  };
  background: {
    paper: string;
    default: string;
    transparentBlack: string;
    lightBackgroundColor: string;
  };
  customBackground: {
    main: string;
    light: string;
    dark: string;
    default: string;
  };
}

export const globalColors: GlobalColors = {
  common: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
    divider: "#rgba(0, 0, 0, 0.12)",
  },
  background: {
    paper: "#fff",
    default: "#f5f5f5",
    transparentBlack: "rgba(0, 0, 0, 0.24)",
    lightBackgroundColor: "#F2F2F2",
  },
  customBackground: {
    main: "#282828",
    light: "#ffffff",
    // dark: "rgba(0, 0, 0, 0.24)",
    dark: "#1C1C1C",
    default: "#959595",
  },
};
