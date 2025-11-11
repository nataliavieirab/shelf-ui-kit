import { useState, MouseEvent, ChangeEvent } from "react";

export function usePasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const preventMouseDefault = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    preventMouseDefault,
    password,
    handlePasswordChange,
  };
}
