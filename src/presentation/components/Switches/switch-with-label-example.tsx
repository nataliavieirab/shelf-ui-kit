import React from "react";
import CustomSwitch from "./custom-switch";

export default function SwitchWithLabelExample() {
  const [active, setActive] = React.useState(false);
  return (
    <CustomSwitch
      isActive={active}
      onChange={(v) => setActive(v)}
      label="label"
      withLabel
    />
  );
}
