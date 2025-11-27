import { useState } from "react";
import InputTextField from "../components/Textfields/InputTextfield/input-textfield";

export default function SimpleTextFieldExample() {
  const [productName, setProductName] = useState("");
  const [errors, setErrors] = useState([
    { id: "1", message: "O nome é obrigatório" },
    { id: "2", message: "Mínimo de 3 caracteres" },
  ]);

  return (
    <div
      style={{
        padding: "8px 20px 0px 0px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <InputTextField
        placeholder="Digite o nome do produto"
        value={productName}
        label="Nome"
        valueHandler={setProductName}
        errors={errors}
        messageBoxOnBottom={true}
      />
    </div>
  );
}
