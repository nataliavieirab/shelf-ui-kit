import { SxProps, Theme } from "@mui/material";

export const MainPageContentWrapperStyle = (theme: Theme): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: "1.5rem 2rem",
  background: `${theme.palette.common.white} !important`,
});
