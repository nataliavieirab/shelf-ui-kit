import { useState } from "react";
import SelectComponent from "../../../components/Select/select";
import { HeightBoxSizes, WidthBoxSizes } from "../../../components/types";
import { useTheme } from "@mui/material/styles";
import { pxToRem } from "../../../../utils/px-to-rem";

export default function HeaderSelect() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const theme = useTheme();
  const items: any = [
    {
      id: "ohanaCtb",
      name: "Ohana Sushi Curitiba",
    },
    {
      id: "ohanaMatriz",
      name: "Ohana Sushi Matriz",
    },
    {
      id: "ohanaBc",
      name: "Ohana Sushi BC",
    },
    {
      id: "ohanaJoinville",
      name: "Ohana Sushi Joinville",
    },
  ];

  const selectStyle = {
    backgroundColor: "#1C1C1C !important",
    border: "1px solid #363636 !important ",
    borderRadius: "4px",
    fontColor: theme.palette.common.white,
    fontSize: "0.875rem",
    focusedBorderColor: "#e8e8e8 !important",
    hoverColor: "#696969 !important",
  };

  const searchStyles = {
    searchBoxWidth: pxToRem(230),
    searchBoxHeight: pxToRem(32),
  };

  const indexedItems = items.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {});

  return (
    <div
      style={{
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
        fieldWidth={WidthBoxSizes(useTheme()).medium}
        fieldHeight={"2.5rem"}
        searchHeight={HeightBoxSizes(useTheme()).extraSmall}
        styles={selectStyle}
        searchStyles={searchStyles}
      />
    </div>
  );
}
