import { Theme } from "@mui/material/styles";

export const labelStyles = (theme: Theme) => ({
  color: theme.palette.text.primary,
  paddingBottom: "8px",
  paddingLeft: "2px",
});

export const selectStyles = (
  fontColor: string,
  fontSize: string,
  backgroundColor: string,
  fieldHeight?: string,
  iconColor?: string
) => ({
  height: fieldHeight,
  color: fontColor,
  fontSize: fontSize,
  backgroundColor,

  "& .MuiSelect-icon": {
    color: iconColor,
  },
});

export const MenuItemPaperPropsStyle = (
  hoverItemBackground: string,
  selectedHoverItemBackground: string,
  menuItemBackgroundColor: string
) => ({
  sx: {
    "& .MuiMenuItem-root": {
      "&:hover": {
        backgroundColor: hoverItemBackground,
      },
      "&.Mui-selected": {
        backgroundColor: menuItemBackgroundColor,
        "&:hover": {
          backgroundColor: selectedHoverItemBackground,
        },
      },
    },
  },
});
