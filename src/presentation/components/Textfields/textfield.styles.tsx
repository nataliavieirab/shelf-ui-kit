import { Theme } from "@mui/material/styles";

export const textfieldStyles = (fieldWidth: string) => ({
  "& .MuiInputBase-root": {
    width: fieldWidth,
  },
});

export const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "6px",
};

export const labelStyles = (theme: Theme) => ({
  color: theme.palette.text.primary,
});

export const errorStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.error.main,
});

export const inputWrapperErrorStyle = () => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible !important",
});
