import React, { useState } from "react";
import CustomOutlinedButton from "../components/CustomOutlinedButton/custom-outlined-button";

export default function CustomOutlinedButtonExample() {
  const [clickCount, setClickCount] = useState(0);

  const handleAddClick = () => {
    setClickCount((prev) => prev + 1);
    console.log("Botão Adicionar (Outlined) clicado!");
  };

  const handleImportClick = () => {
    console.log("Botão Importar (Outlined) clicado!");
    alert("Funcionalidade de importação - Outlined Button");
  };

  const handleExportClick = () => {
    console.log("Botão Exportar (Outlined) clicado!");
    alert("Funcionalidade de exportação - Outlined Button");
  };

  const handleSendClick = () => {
    console.log("Botão Enviar (Outlined) clicado!");
    alert("Funcionalidade de envio - Outlined Button");
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
        <CustomOutlinedButton
          placeholder="Adicionar Item"
          hasIcon={true}
          type="add"
          onClick={handleAddClick}
        />

        {/* <CustomOutlinedButton
          placeholder="Importar Dados"
          hasIcon={true}
          type="import"
          onClick={handleImportClick}
        />

        <CustomOutlinedButton
          placeholder="Exportar Relatório"
          hasIcon={true}
          type="export"
          onClick={handleExportClick}
        />

        <CustomOutlinedButton
          placeholder="Enviar Formulário"
          hasIcon={true}
          type="send"
          onClick={handleSendClick}
        /> */}
      </div>
    </div>
  );
}
