import * as React from "react";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";
import { IOSSwitch } from "./custom-switch.styles";

type SwitchProps = {
  isActive?: boolean;
  defaultActive?: boolean;
  onChange?: (
    active: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  label?: string;
  withLabel?: boolean;
  switchProps?: Omit<SwitchProps, "checked" | "onChange">;
  labelProps?: Omit<FormControlLabelProps, "control" | "label">;
};
export default function CustomSwitch({
  isActive,
  defaultActive = false,
  onChange,
  label = "",
  withLabel = false,
  switchProps = {},
  labelProps = {},
}: SwitchProps) {
  const isControlled = typeof isActive === "boolean";
  const [internalActive, setInternalActive] = React.useState(defaultActive);
  const current = isControlled ? (isActive as boolean) : internalActive;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.checked;
    if (!isControlled) {
      setInternalActive(next);
    }
    if (onChange) {
      onChange(next, event);
    }
  };

  const switchElement = (
    <IOSSwitch checked={current} onChange={handleChange} {...switchProps} />
  );

  if (withLabel) {
    return (
      <FormControlLabel
        control={switchElement}
        label={label}
        {...labelProps}
        slotProps={{
          typography: {
            variant: "caption",
            sx: { paddingLeft: "8px" },
          },
        }}
      />
    );
  }

  return switchElement;
}
