export type CustomOutlinedButtonProps = {
  placeholder: string;
  hasIcon?: boolean;
  type: "add" | "import" | "export" | "send";
  onClick?: () => void;
};

export type ButtonType = "add" | "import" | "export" | "send";
