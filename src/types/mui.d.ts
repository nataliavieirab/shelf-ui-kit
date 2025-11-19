import "@mui/material/styles";
import { layoutMetrics } from "../themes/baseTokens/layout-metrics";
import { typography } from "../themes/baseTokens/typography";
import { SystemStyleObject } from "@mui/system";
import { Theme as MuiTheme } from "@mui/material/styles";

import "@mui/x-data-grid/themeAugmentation";

declare module "@mui/material/styles" {
  interface Theme {
    layoutMetrics: typeof layoutMetrics;

    typography: typeof typography;

    customGradients: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    customBackground: {
      main: string;
      light: string;
      dark: string;
      default: string;
    };

    customSidebarColors: {
      sections: {
        titleFontColor: string;
        letterSpacing: string;
      };
    };
  }

  interface ThemeOptions {
    layoutMetrics?: typeof layoutMetrics;
    typography?: typeof typography;

    customGradients?: {
      primary?: string;
      secondary?: string;
      tertiary: string;
    };

    customBackground?: {
      main: string;
      light: string;
      dark: string;
      default: string;
    };

    customSidebarColors?: {
      sections: {
        titleFontColor: string;
        letterSpacing: string;
      };
    };
  }

  interface Components {
    MuiDataGrid?: {
      defaultProps?: {};
      styleOverrides?: {
        root?: (props: {
          theme: MuiTheme;
        }) => SystemStyleObject<MuiTheme> | SystemStyleObject<MuiTheme>;
      };
    };
  }
}
