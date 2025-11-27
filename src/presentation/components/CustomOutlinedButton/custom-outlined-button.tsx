/** @jsxImportSource @emotion/react */
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CustomOutlinedButtonProps } from "./custom-outlined-button.types";
import {
  getButtonStyles,
  getStackStyles,
} from "./custom-outlined-button.styles";
import { useCustomOutlinedButton } from "./use-custom-outlined-button";
import { Typography } from "@mui/material";

export default function CustomOutlinedButton({
  placeholder,
  hasIcon,
  type,
  onClick,
}: CustomOutlinedButtonProps) {
  const { theme, getIconForType } = useCustomOutlinedButton();
  const stackStyles = getStackStyles();
  const buttonStyles = getButtonStyles(theme);

  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={getIconForType(type, hasIcon)}
      sx={buttonStyles}
      onClick={onClick}
    >
      <Typography
        variant="button"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {placeholder}
      </Typography>
    </Button>
  );
}
