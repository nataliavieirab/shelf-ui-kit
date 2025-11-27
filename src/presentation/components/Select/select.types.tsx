import { ReactElement } from "react";
import { SelectStyleOverrides } from "./SelectSearchTextfield/select-search-textfield.types";

export type SelectProps = {
  items: { key: string; label?: string | React.ReactNode; value: any }[];
  label?: string;
  initialValue?: any;
  changeHandler: (value: any) => void;
  withSearch?: boolean;
  withLabel?: boolean;
  blocked?: boolean;
  styles?: StyleOverrides;
  searchStyles?: SelectStyleOverrides;
  borderColor?: string;
  // fieldHeight?: string;
  searchWidth?: string;
  searchHeight?: string;
  icon?: ReactElement;
  placeholder?: string;
};

export type StyleOverrides = {
  backgroundColor?: string;
  borderColor?: string;
  focusedBorderColor?: string;
  hoverItemBackground?: string;
  selectedHoverItemBackground?: string;
  iconColor?: string;
  inputBackground?: string;
  inputBorderColor?: string;
  fontColor?: string;
  fontSize?: string;
  menuItemBackgroundColor?: string;
  hoverColor?: string;
  boxHeight?: string;
  focusedBorder?: string;
  borderRadius?: string;
  border?: string;
  borderWidth?: string;
};
