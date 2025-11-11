import { SxProps, Theme } from "@mui/material";

export const MainContentContainerStyle = (theme: Theme): SxProps<Theme> => ({
  boxShadow: "0px 0px 3px 3px rgba(105, 105, 105, 0.1)",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  "& .MuiBox-root:": {
    padding: "16px",
  },
});
