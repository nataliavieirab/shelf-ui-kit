/** @jsxImportSource @emotion/react */
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CustomOutlinedButtonProps } from "./custom-outlined-button.types";
import {
  getButtonStyles,
  getStackStyles,
} from "./custom-outlined-button.styles";
import { useCustomOutlinedButton } from "./use-custom-outlined-button";
import { Typography } from "@mui/material";
import { WidthBoxSizes } from "../types";
import { useTheme } from "@mui/material/styles";

export default function CustomOutlinedButton({
  placeholder,
  hasIcon,
  type,
  fieldWidth = WidthBoxSizes(useTheme()).small,
  onClick,
}: CustomOutlinedButtonProps) {
  const { theme, getIconForType } = useCustomOutlinedButton();
  const stackStyles = getStackStyles();
  const buttonStyles = getButtonStyles(theme, fieldWidth);

  return (
    <Stack spacing={stackStyles.spacing} direction={stackStyles.direction}>
      <Button
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
          // sx={textFieldStyle}
        >
          {placeholder}
        </Typography>
      </Button>
    </Stack>
  );
}
