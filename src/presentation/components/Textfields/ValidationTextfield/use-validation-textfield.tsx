import { useState, useCallback } from "react";
import { ValidationTextFieldProps } from "./validation-textfield.types";

export const useValidationTextField = (props: ValidationTextFieldProps) => {
  const [value, setValue] = useState(props.defaultValue || "");
  const [error, setError] = useState(props.error || false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const validateField = useCallback(() => {
    return !error;
  }, [error]);

  return {
    value,
    error,
    handleChange,
    validateField,
  };
};
