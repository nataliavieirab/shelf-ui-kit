import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { usePasswordField } from "./use-password-field";
import { Typography } from "@mui/material";
import { boxStyle, labelStyles } from "../textfield.styles";
import {
  VisibilityGradientIcon,
  VisibilityOffGradientIcon,
} from "../../Icons/gradient-icons";

type PasswordTextFieldProps = {
  withLabel?: boolean;
  label?: string;
  changeHandler: (value: string) => void;
};

export default function PasswordTextField({
  withLabel = false,
  label = "Senha",
  changeHandler,
}: PasswordTextFieldProps) {
  const { showPassword, togglePasswordVisibility, preventMouseDefault } =
    usePasswordField();

  return (
    <Box sx={boxStyle}>
      {withLabel && (
        <Typography variant="caption" sx={labelStyles}>
          {label}
        </Typography>
      )}
      <FormControl variant="outlined">
        <OutlinedInput
          fullWidth
          size="small"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => changeHandler(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={togglePasswordVisibility}
                onMouseDown={preventMouseDefault}
                onMouseUp={preventMouseDefault}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOffGradientIcon
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                ) : (
                  <VisibilityGradientIcon
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          // label="Password"
        />
      </FormControl>
    </Box>
  );
}
