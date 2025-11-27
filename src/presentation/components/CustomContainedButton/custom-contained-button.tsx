import Button from "@mui/material/Button";
import { CustomContainedButtonProps } from "./custom-contained-button.types";
import { useCustomContainedButton } from "./use-custom-contained-button";
import { Typography } from "@mui/material";

export default function CustomContainedButton({
  placeholder,
  hasIcon = false,
  type,
  onClick,
}: CustomContainedButtonProps) {
  const { buttonStyles, startIcon } = useCustomContainedButton(type, hasIcon);

  return (
    <Button
      fullWidth
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
  );
}
