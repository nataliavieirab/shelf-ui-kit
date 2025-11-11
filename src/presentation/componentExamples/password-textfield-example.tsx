import { useState } from "react";
import PasswordTextField from "../components/Textfields/PasswordTextfield/password-textfiend";

export default function PasswordTextfieldExample() {
  const [password, setPassword] = useState();

  function handlePasswordChange(value: any): void {
    setPassword(password);
  }

  return (
    <div
      style={{
        padding: "8px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <PasswordTextField changeHandler={handlePasswordChange} />
    </div>
  );
}
