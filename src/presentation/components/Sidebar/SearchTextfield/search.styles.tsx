import { WidthBoxSizes } from "../../types";
import { Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const searchContainerStyle =
  (
    width: string,
    height: string,
    backgroundColor: string,
    border: string,
    borderRadius?: string
  ) =>
  (theme: Theme) => {
    return {
      width: width,
      maxWidth: 600,
      minWidth: WidthBoxSizes(useTheme()).extraSmall,

      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        minWidth: "100%",
      },

      "& .MuiOutlinedInput-root": {
        borderRadius,
        backgroundColor,
        height,
        "& fieldset": { borderRadius, border },
        "&:hover fieldset": {
          borderColor: theme.customBackground.default,
        },
        "&.Mui-focused fieldset": {
          borderRadius,
          border: "1px solid #9C9C9C",
        },
      },
    };
  };
