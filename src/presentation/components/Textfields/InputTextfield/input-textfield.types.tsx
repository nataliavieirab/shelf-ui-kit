import { Errors } from "../../ErrorBox/error-box.types";

export type InputProps = {
  placeholder?: string;
  withLabel?: boolean;
  value?: string;
  label?: string;
  valueHandler: (value: string) => void;
  errors?: Errors[];
  messageBoxOnBottom?: boolean;
};
