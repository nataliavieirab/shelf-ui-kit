export type Errors = {
  id: string;
  message: string;
};

export type ErrorBoxProps = {
  errors: Errors[];
  showBox: boolean;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  messageBoxOnBottom: boolean;
  customStyle?: object;
};
