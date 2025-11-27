import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { ValidationTextFieldProps } from "./validation-textfield.types";
import { useValidationTextField } from "./use-validation-textfield";

export default function ValidationTextfield({
  error = true,
  // label = "Error",
  defaultValue = "Hello World",
  helperText = `Incorrect entry`,
  autoComplete = "off",
  noValidate = true,
}: ValidationTextFieldProps) {
  const { handleChange } = useValidationTextField({
    error,
    defaultValue,
  });

  return (
    <Box component="form" noValidate={noValidate} autoComplete={autoComplete}>
      <div
        style={{
          padding: "8px 0px 0px 0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          fullWidth
          id="outlined-size-small"
          size="small"
          error={error}
          // label={label}
          defaultValue={defaultValue}
          helperText={helperText}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
