import { Theme } from "@mui/material/styles";

export const getButtonStyles = (theme: Theme, size: any, height: any) => ({
  background: theme.customGradients.primary,
  height: height,
  width: size,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
  maxWidth: 600,
  minWidth: theme.layoutMetrics.inputBox.widths.extraSmall,
  textTransform: "none",

  transition: "background 0.2s ease, transform 0.2s ease, opacity 0.2s ease",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },

  "&:hover": {
    background: theme.customGradients.secondary,
    transform: "translateY(-1px)",
    boxShadow: "1px 1px 1px 1px rgba(245, 245, 245, 1)",
  },
});

export const getStackStyles = () => ({
  spacing: 2,
  direction: "row" as const,
});
