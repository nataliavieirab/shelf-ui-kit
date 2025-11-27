import { Theme } from "@mui/material/styles";

export const getButtonStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  // height: theme.layoutMetrics.inputBox.heights.button,
  // boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
  border: theme.layoutMetrics.inputBox.border.defaultBorder,

  // width: fieldWidth,
  maxWidth: 600,
  minWidth: theme.layoutMetrics.inputBox.widths.extraSmall,

  transition:
    "background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },

  "&:hover": {
    background: theme.customGradients.secondary,
    border: "none",
    transform: "translateY(-1px)",
    // boxShadow: "0px 0px 2px 2px rgba(245, 245, 245, 1)",
  },
});

export const getStackStyles = () => ({
  spacing: 1,
  direction: "row" as const,
});
