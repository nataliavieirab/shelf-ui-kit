import { SxProps, Theme } from "@mui/material";
import { SidebarClosedDisplay } from "./sidebar.types";
import { pxToRem } from "../../../utils/px-to-rem";

export const scrollStyle: SxProps<Theme> = {
  overflowY: "auto",
  "::-webkit-scrollbar": { width: pxToRem(12) },
  "::-webkit-scrollbar-track": {
    background: "transparent",
    borderRadius: pxToRem(9999),
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#696969",
    borderRadius: pxToRem(9999),
    minHeight: pxToRem(28),
    border: "3px solid transparent",
    backgroundClip: "padding-box",
  },
  "::-webkit-scrollbar-button": {
    display: "none",
    width: 0,
    height: 0,
  },
  "::-webkit-scrollbar-corner": { background: "transparent" },
};

export const sectionTitleStyle = (
  sectionFontColor: string,
  theme: Theme
): SxProps<Theme> => ({
  fontWeight: 500,
  color: sectionFontColor,
  padding: theme.spacing(1),
});

export const drawerStyles = (
  open: boolean,
  drawerWidth: string,
  collapsedWidth: string,
  style: SidebarClosedDisplay,
  backgroundColor: string
): SxProps<Theme> => {
  const width =
    style === SidebarClosedDisplay.SimpleIconButton
      ? open
        ? drawerWidth
        : 0
      : open
        ? drawerWidth
        : collapsedWidth;

  return {
    width,
    flexShrink: 0,
    whiteSpace: "nowrap",
    "& .MuiDrawer-paper": {
      width: open ? drawerWidth : collapsedWidth,
      transformOrigin: "left center",
      transform: "scaleX(1)",
      backgroundColor: backgroundColor,
      color: "#fff",
      transition: "width 0.5s ease",
      overflowX: "hidden",
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(2px)",
    },
  };
};

export const containerStyles: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

export const toggleButtonContainerStyles = (open: boolean): SxProps<Theme> => ({
  display: "flex",
  justifyContent: open ? "flex-start" : "center",
  padding: "0px 8px",
  transition: "opacity 0.3s ease",
});

export const toggleButtonStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.common.white,
});

export const simpleIconButtonStyle = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.text.primary,
});

export const searchContainerStyles = (theme: Theme): SxProps<Theme> => ({
  px: theme.spacing(2),
  py: theme.spacing(1),
});

export const textfieldStyles = (
  theme: Theme,
  fontColor: string,
  searchWidth: string,
  searchHeight: string,
  searchBackgroundColor: string,
  searchBorder: string
) => ({
  display: "flex",
  alignItems: "center",
  "& .MuiInputBase-root": {
    color: fontColor,
    width: searchWidth,
    height: searchHeight,
    background: searchBackgroundColor,
    border: searchBorder,
    paddingTop: theme.spacing(0.25),
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { searchBorder },
    "&:hover fieldset": {
      borderColor: theme.customBackground.default,
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #9C9C9C",
    },
  },
});

export const searchIconStyles = (theme: Theme): SxProps<Theme> => ({
  mr: theme.spacing(1),
  height: pxToRem(40),
  weight: pxToRem(40),
  color: theme.palette.text.disabled,
});

export const searchInputProps = (theme: Theme) => ({
  fontColor: theme.palette.text.disabled,
});

export const sectionContainerStyles = (theme: Theme): SxProps<Theme> => ({
  px: theme.spacing(1.25),
  py: theme.spacing(1.25),
});

export const moduleButtonStyles = (theme: Theme): SxProps<Theme> => ({
  display: "flex",
  aligntItems: "center",
  flexDirection: "row",
  gap: theme.spacing(1.25),
});

export const moduleIconStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.secondary.main,
  minWidth: 0,
});

export const moduleTextStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.common.white,
  paddingTop: theme.spacing(0.25),
});

export const itemButtonStyles = (theme: Theme): SxProps<Theme> => ({
  pl: theme.spacing(8),
});

export const itemTextStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.common.white,
});
