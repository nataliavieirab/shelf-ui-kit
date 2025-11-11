import { Theme } from "@mui/material/styles";

export const ProductsMainPageStyles = (theme: Theme) => ({
  pageTitleContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: theme.spacing(1),
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
