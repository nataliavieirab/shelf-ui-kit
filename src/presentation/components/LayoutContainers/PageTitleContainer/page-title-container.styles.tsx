import { Theme } from "@mui/material";
import { pxToRem } from "../../../../utils/px-to-rem";

export const PageTitleContainerStyles = (theme: Theme) => ({
  wrapperContainer: {
    display: "flex",
    flexDirection: "row",
    gap: {
      xs: pxToRem(128),
      sm: pxToRem(550),
      md: pxToRem(660),
      lg: pxToRem(1250),
      xl: pxToRem(1362),
    },
    alignItems: "center",
  },

  mainContentContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: {
      xs: theme.spacing(0.75),
      sm: theme.spacing(0.75),
      md: theme.spacing(0.75),
      lg: theme.spacing(0.5),
      xl: theme.spacing(1.25),
    },
    paddingLeft: {
      xs: theme.spacing(0.125),
      sm: theme.spacing(0.125),
      md: theme.spacing(0.125),
      lg: theme.spacing(0.125),
      xl: theme.spacing(0.5),
    },
  },

  pageTitleContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: theme.spacing(1),
  },

  pageIcon: {
    fontSize: {
      xs: pxToRem(32),
      sm: pxToRem(32),
      md: pxToRem(32),
      lg: pxToRem(32),
      xl: pxToRem(32),
    },
    marginBottom: "8px",
  },

  pageTitle: {
    color: theme.palette.text.primary,
  },

  breadcrumbsContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: theme.spacing(0.5),

    [theme.breakpoints.down("sm")]: {
      display: "none" as const,
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: theme.spacing(0.25),
    },
  },

  breadcrumbItem: (isLast: boolean) => ({
    background: isLast
      ? theme.customGradients.primary
      : theme.palette.text.disabled,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: isLast ? 600 : 500,
  }),

  breadcrumbIcon: {
    color: theme.palette.text.disabled,
  },
});
