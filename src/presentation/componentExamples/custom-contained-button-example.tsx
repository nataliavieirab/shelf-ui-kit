import React, { useState } from "react";
import CustomContainedButton from "../components/CustomContainedButton/custom-contained-button";
import { BoxSizes } from "../components/types";

export default function CustomContainedButtonExample() {
  const [click, setClick] = useState(0);

  const handleAddClick = () => {
    setClick(click);
  };

  const handleImportClick = () => {
    console.log("Botão Importar clicado!");
    alert("Funcionalidade de importação");
  };

  const handleExportClick = () => {
    console.log("Botão Exportar clicado!");
    alert("Funcionalidade de exportação");
  };

  const handleSendClick = () => {
    console.log("Botão Enviar clicado!");
    alert("Funcionalidade de envio");
  };

  return (
    <div
      style={{
        padding: "8px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <CustomContainedButton
          placeholder="Adicionar Item"
          hasIcon={true}
          type="import"
          onClick={handleAddClick}
        />
      </div>
    </div>
  );
}
