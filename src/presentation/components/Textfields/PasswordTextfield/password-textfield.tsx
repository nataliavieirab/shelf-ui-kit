import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { usePasswordField } from "./use-password-field";
import { HeightBoxSizes, WidthBoxSizes } from "../../types";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { boxStyle, labelStyles, textfieldStyles } from "../textfield.styles";
import {
  VisibilityGradientIcon,
  VisibilityOffGradientIcon,
} from "../../Icons/gradient-icons";

type PasswordTextFieldProps = {
  fieldWidth?: string;
  fieldHeight?: string;
  withLabel?: boolean;
  label?: string;
  changeHandler: (value: string) => void;
};

export default function PasswordTextField({
  fieldWidth = WidthBoxSizes(useTheme()).small,
  fieldHeight = HeightBoxSizes(useTheme()).small,
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
      <FormControl sx={textfieldStyles(fieldWidth)} variant="outlined">
        <OutlinedInput
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
