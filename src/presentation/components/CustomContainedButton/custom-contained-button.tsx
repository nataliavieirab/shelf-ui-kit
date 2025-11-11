import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { HeightBoxSizes, WidthBoxSizes } from "../types";
import { CustomContainedButtonProps } from "./custom-contained-button.types";
import { useCustomContainedButton } from "./use-custom-contained-button";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomContainedButton({
  placeholder,
  hasIcon = false,
  type,
  fieldWidth = WidthBoxSizes(useTheme()).large,
  fieldHeight = HeightBoxSizes(useTheme()).default,
  onClick,
}: CustomContainedButtonProps) {
  const { buttonStyles, stackStyles, startIcon } = useCustomContainedButton(
    type,
    hasIcon,
    fieldWidth,
    fieldHeight
  );

  return (
    <Stack {...stackStyles}>
      <Button
        variant="contained"
        startIcon={startIcon}
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
    </Stack>
  );
}
