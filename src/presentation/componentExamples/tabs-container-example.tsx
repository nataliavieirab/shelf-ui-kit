import React from "react";
import TabsContainer from "../components/TabsContainer/tabs-container";

export default function TabsContainerExample() {
  const labels = [
    "Cardápio",
    "Categorias",
    "Produtos",
    "Grupos de Itens",
    "Itens",
    "Tabelas",
  ];

  const contents = [
    <div>Conteúdo do Cardápio</div>,
    <div>Conteúdo das Categorias</div>,
    <div>Conteúdo dos Produtos</div>,
    <div>Conteúdo dos Grupos de Itens</div>,
    <div>Conteúdo dos Itens</div>,
    <div>Conteúdo das Tabelas</div>,
  ];

  return <TabsContainer tabLabels={labels} tabContents={contents} />;
}
