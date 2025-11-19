import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { globalColors } from "../themes/baseTokens/colors";
import { typography } from "../themes/baseTokens/typography";
import { layoutMetrics } from "../themes/baseTokens/layout-metrics";
import { componentsOverrides } from "../themes/baseTokens/components-overrides"; // <-- Importação adicionada

interface CustomThemeOptions {
  colors?: Partial<typeof globalColors>;
}

export const createCustomTheme = (options?: CustomThemeOptions): Theme => {
  const brandColors = deepmerge(globalColors, options?.colors || {});

  const customGradients = {
    primary: `linear-gradient(to right, ${brandColors.secondary.light}, ${brandColors.secondary.main})`,
    secondary: `linear-gradient(to right, ${brandColors.secondary.main}, ${brandColors.secondary.light})`,
    tertiary: `linear-gradient(90deg, ${brandColors.secondary.light}, ${brandColors.secondary.main}, ${brandColors.secondary.main})`,
  };

  const customBackground = {
    main: `${brandColors.customBackground.main}`,
    light: `${brandColors.customBackground.light}`,
    dark: `${brandColors.customBackground.dark}`,
    default: `${brandColors.customBackground.default}`,
  };

  const baseThemeOptions: ThemeOptions = {
    palette: {
      ...brandColors,
    },

    typography: {
      fontFamily: typography.fontFamily,
      ...typography.variants,
    } as any,

    spacing: (factor: number) => `${0.5 * factor}rem`,

    shape: {
      borderRadius:
        layoutMetrics.inputBox.border.borderRadius.defaultBorderRadius,
    },

    components: componentsOverrides({
      palette: brandColors,
      layoutMetrics,
      spacing: (factor: number) => `${0.5 * factor}rem`,
      shape: {
        defaultBorder: layoutMetrics.inputBox.border.defaultBorder,
        borderRadius: {
          default:
            layoutMetrics.inputBox.border.borderRadius.defaultBorderRadius,
          medium: layoutMetrics.inputBox.border.borderRadius.mediumBorderRadius,
          lower: layoutMetrics.inputBox.border.borderRadius.lowerBorderRadius,
        },
      },
      customGradients,
      customBackground,
    } as any),

    customGradients,

    layoutMetrics,

    customBackground,
  };

  return createTheme(baseThemeOptions);
};
