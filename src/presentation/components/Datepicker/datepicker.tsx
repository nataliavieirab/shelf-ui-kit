import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material/styles";
import { useBasicDatePicker } from "./use-datepicker";
import { HeightBoxSizes, WidthBoxSizes } from "../types";

type DatePickerProps = {
  changeHandler: (date: Date | undefined) => void;
  initialValue?: Date;
  label?: string;
  fieldHeight?: string;
};

export default function DatePickerComponent({
  changeHandler,
  initialValue,
  // label = "",
  fieldHeight = HeightBoxSizes(useTheme()).default,
}: DatePickerProps) {
  const { value, handleChange } = useBasicDatePicker(initialValue);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => handleChange(newValue, changeHandler)}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            InputProps: {
              sx: {
                height: fieldHeight,
                "& .MuiInputBase-input": {
                  height: fieldHeight,
                },
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
