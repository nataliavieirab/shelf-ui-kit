import * as React from "react";
import { useTheme } from "@mui/material/styles";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ButtonType } from "./custom-outlined-button.types";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
export const useCustomOutlinedButton = () => {
  const theme = useTheme();

  const buttonIcons = React.useMemo(
    () => ({
      add: <AddBoxRoundedIcon fontSize="small" />,
      import: <FileDownloadRoundedIcon />,
      export: <FileUploadRoundedIcon />,
      send: <SendRoundedIcon />,
    }),
    []
  );

  const getIconForType = React.useCallback(
    (type: ButtonType, hasIcon?: boolean) => {
      return hasIcon ? buttonIcons[type] : null;
    },
    [buttonIcons]
  );

  return {
    theme,
    getIconForType,
  };
};
