import { Theme } from "@mui/material/styles";

export const WidthBoxSizes = (theme: Theme) => ({
  extraSmall: theme.layoutMetrics.inputBox.widths.extraSmall,
  small: theme.layoutMetrics.inputBox.widths.small,
  semiMedium: theme.layoutMetrics.inputBox.widths.semiMedium,
  medium: theme.layoutMetrics.inputBox.widths.medium,
  large: theme.layoutMetrics.inputBox.widths.large,
  extraLarge: theme.layoutMetrics.inputBox.widths.extraLarge,
});

export const HeightBoxSizes = (theme: Theme) => ({
  default: theme.layoutMetrics.inputBox.heights.default,
  button: theme.layoutMetrics.inputBox.heights.button,
  extraSmall: theme.layoutMetrics.inputBox.heights.extraSmall,
  small: theme.layoutMetrics.inputBox.heights.small,
  medium: theme.layoutMetrics.inputBox.heights.medium,
  large: theme.layoutMetrics.inputBox.heights.large,
});
