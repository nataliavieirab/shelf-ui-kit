export type CustomContainedButtonProps = {
  placeholder: string;
  hasIcon?: boolean;
  type: "add" | "import" | "export" | "send";
  fieldWidth?: string;
  fieldHeight?: string;
  onClick?: () => void;
};

export type ButtonType = "add" | "import" | "export" | "send";
