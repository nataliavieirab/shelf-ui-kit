import * as React from "react";
import { useTheme } from "@mui/material/styles";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ButtonType } from "./custom-contained-button.types";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import {
  getButtonStyles,
  getStackStyles,
} from "./custom-contained-button.styles";

const buttonIcons = {
  add: <AddBoxRoundedIcon />,
  import: <FileDownloadRoundedIcon />,
  export: <FileUploadRoundedIcon />,
  send: <SendRoundedIcon />,
};

export const useCustomContainedButton = (
  type: ButtonType,
  hasIcon: boolean,
  fieldWidth: any,
  fieldHeight: any
) => {
  const theme = useTheme();

  const buttonStyles = React.useMemo(
    () => getButtonStyles(theme, fieldWidth, fieldHeight),
    [theme, fieldWidth, fieldHeight]
  );
  const stackStyles = React.useMemo(() => getStackStyles(), []);

  const startIcon = React.useMemo(() => {
    if (!hasIcon) return null;

    const icon = buttonIcons[type];

    return React.cloneElement(icon, {
      sx: {
        width: 18,
        height: 18,
        color: "#363636",
      },
    });
  }, [hasIcon, type]);

  return {
    buttonStyles,
    stackStyles,
    startIcon,
  };
};
