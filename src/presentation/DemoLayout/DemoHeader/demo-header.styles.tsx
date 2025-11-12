import { Theme } from "@mui/material/styles";
import { pxToRem } from "../../../utils/px-to-rem";

export const getHeaderStyles = (theme: Theme) => ({
  headerContainer: {
    display: "flex" as const,
    flexDirection: "row" as const,
  },

  actionsContainer: {
    display: "flex" as const,
    flexDirection: "row" as const,
    alignItems: "center",
    gap: {
      xs: "2px",
      sm: "3px",
      md: "4px",
      lg: "18px",
      xl: "26px",
    },

    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: theme.spacing(1.5),
    },
  },

  notificationIcon: {
    color: "#f5f5f5",
    fontSize: pxToRem(24),
  },

  divider: {
    display: "flex",
    alignSelf: "center",
    background: "linear-gradient(to bottom, #FCE591, #D39B21)",
    width: "2px",
    borderRadius: theme.spacing(2),
    height: pxToRem(30),

    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1.5),
      marginLeft: theme.spacing(0.75),
      height: pxToRem(36),
    },
  },

  userProfileContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    gap: {
      xs: "2px",
      sm: "3px",
      md: "4px",
      lg: "18px",
      xl: "26px",
    },
  },

  userAvatar: {
    width: "2.375rem",
    height: "2.375rem",
    color: "#f5f5f5",

    bgcolor: "rgb(28, 28, 28, 0.8)",
    border: "1px solid #363636",
    borderRadius: "4px",

    [theme.breakpoints.down("sm")]: {
      width: "2.25rem",
      height: "2.25rem",
    },

    [theme.breakpoints.between("sm", "md")]: {
      width: "2.25rem",
      height: "2.25rem",
    },
  },

  userInfoContainer: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: {
      xs: "1px",
      sm: "1px",
      md: "1px",
      lg: theme.spacing(0.25),
      xl: theme.spacing(0.5),
    },
  },

  userName: {
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  userRole: {
    background: "linear-gradient(to right, #FCE591, #D39B21)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  dropdownButton: {
    width: "2.375rem",
    height: "2.375rem",

    backgroundColor: "rgb(28, 28, 28, 0.8)",
    border: "1px solid #363636",
    borderRadius: "4px",
  },

  dropdownIcon: {
    color: theme.palette.common.white,
    fontSize: pxToRem(32),
  },

  selectContainer: {
    minWidth: pxToRem(220),
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D39B21",
    },
  },
});
