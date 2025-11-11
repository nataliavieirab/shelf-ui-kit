import { ReactElement } from "react";

export type StyleOverrides = {
  backgroundColor?: string;
  borderColor?: string;
  focusedBorderColor?: string;
  iconColor?: string;
  hoverColor?: string;
  borderRadius?: string;
  border?: string;
};

export type SearchProps = {
  value: string;
  changeHandler: (value: string) => void;
  // items: [];
  placeholder?: string;
  withLabel?: boolean;
  label?: string;
  fieldWidth?: string;
  disabled?: boolean;
  styles?: StyleOverrides;
  icon?: ReactElement;
};
