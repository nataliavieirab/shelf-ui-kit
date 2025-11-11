import { Checkbox, FormControlLabel, FormGroup, useTheme } from "@mui/material";
import { checkBoxStyles } from "../checkboxes.styles";
import { CheckBoxLabelProps } from "../checkboxes.types";

export default function CheckBoxWithLabel({
  isRequired = false,
  isDisabled = false,
  styles = {},
  label = "",
}: CheckBoxLabelProps) {
  const theme = useTheme();
  const { checkBoxColor = theme.palette.secondary.main } = styles;
  return (
    <FormGroup>
      {isRequired && (
        <FormControlLabel
          required
          control={<Checkbox sx={checkBoxStyles(checkBoxColor)} />}
          label={label}
        />
      )}
      {isDisabled && (
        <FormControlLabel
          disabled
          control={<Checkbox sx={checkBoxStyles(checkBoxColor)} />}
          label={label}
        />
      )}
      <FormControlLabel
        control={<Checkbox defaultChecked sx={checkBoxStyles(checkBoxColor)} />}
        label={label}
      />
    </FormGroup>
  );
}
