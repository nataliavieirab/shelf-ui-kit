export type CustomContainedButtonProps = {
  placeholder: string;
  hasIcon?: boolean;
  type: "add" | "import" | "export" | "send";
  onClick?: () => void;
};

export type ButtonType = "add" | "import" | "export" | "send";
