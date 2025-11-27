import { useState } from "react";
import SelectComponent from "../components/Select/select";

export default function SelectWSearchExample() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const items: any = [
    {
      id: "88888",
      name: "Lala",
      price: 100,
    },
    {
      id: "99999",
      name: "Lala",
      price: 200,
    },
    {
      id: "77777",
      name: "Ladu",
      price: 300,
    },
    {
      id: "66666",
      name: "Lage",
      price: 300,
    },
    {
      id: "55555",
      name: "Mimi",
      price: 300,
    },
    {
      id: "44444",
      name: "Toti",
      price: 300,
    },
  ];

  const indexedItems = items.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {});

  return (
    <div
      style={{
        padding: "8px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SelectComponent
        items={items.map((item: any) => ({
          key: item.name,
          value: item.id,
        }))}
        changeHandler={function (value: any): void {
          setSelectedItemId(value);
        }}
        withSearch={true}
      />
    </div>
  );
}
