import React from "react";
import SearchTextField from "../components/Textfields/SearchTextfield/search-textfield";
import { SearchGradientIcon } from "../components/Icons/gradient-icons";
export default function SearchTextFieldExample() {
  const [search, setSearch] = React.useState("");

  return (
    <div
      style={{
        padding: "8px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SearchTextField
        value={search}
        changeHandler={setSearch}
        placeholder="Buscar..."
        icon={<SearchGradientIcon style={{ width: "28px", height: "28px" }} />}
      />
    </div>
  );
}
