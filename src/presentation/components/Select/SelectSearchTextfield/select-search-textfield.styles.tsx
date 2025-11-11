import { Theme, useTheme } from "@mui/material/styles";
import { WidthBoxSizes } from "../../types";

export const boxStyle =
  (
    searchBoxWidth: string,
    searchBoxHeight: string,
    backgroundColor: string,
    borderRadius: string,
    searchBorder: string,
    searchFocusedBorderColor?: string
  ) =>
  (theme: Theme) => ({
    width: searchBoxWidth,
    maxWidth: 600,
    minWidth: WidthBoxSizes(useTheme()).extraSmall,

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      minWidth: "100%",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius,
      border: searchBorder,
      backgroundColor,
      height: searchBoxHeight,
      paddingRight: "10px",
      "& fieldset": { borderRadius, border: searchBorder },
      "&.Mui-focused fieldset": {
        border: searchBorder,
        borderColor: searchFocusedBorderColor,
        borderRadius,
      },
    },
  });
