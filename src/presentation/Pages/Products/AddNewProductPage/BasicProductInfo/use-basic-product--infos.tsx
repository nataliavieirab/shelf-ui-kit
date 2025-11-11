import { useState } from "react";
import React from "react";

export default function UseBasicPruductInformation() {
  const [selectedItemIdCategory, setSelectedItemIdCategory] =
    useState("allCategories");
  const [selectedItemIdUnits, setSelectedItemIdUnits] = useState("");
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");

  const [isSaleProduct, setIsSaleProduct] = React.useState(true);
  const [isSupplyProduct, setIsSupplyProduct] = React.useState(false);

  const categoryItems: { id: string; name: string }[] = [
    { id: "allCategories", name: "Todas as Categorias" },
    { id: "bebidas", name: "Bebidas" },
    { id: "combos", name: "Combos" },
    { id: "temakis", name: "Temakis" },
    { id: "niguiris", name: "Niguiris" },
    { id: "joes", name: "Joes" },
  ];

  const unitsOfMeasurementItems: { id: string; name: string }[] = [
    { id: "kg", name: "KG" },
    { id: "litro", name: "L" },
    { id: "unidade", name: "UND" },
    { id: "caixa", name: "CX" },
  ];

  return {
    selectedItemIdCategory,
    setSelectedItemIdCategory,
    selectedItemIdUnits,
    setSelectedItemIdUnits,
    productName,
    setProductName,
    productWeight,
    setProductWeight,
    isSaleProduct,
    setIsSaleProduct,
    isSupplyProduct,
    setIsSupplyProduct,

    categoryItems,
    unitsOfMeasurementItems,
  };
}
