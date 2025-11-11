import { Box, Divider, Link } from "@mui/material";
import SearchTextField from "../../../../components/Textfields/SearchTextfield/search-textfield";
import { SearchGradientIcon } from "../../../../components/Icons/gradient-icons";
import SelectComponent from "../../../../components/Select/select";
import ProductTable, {
  sampleRows,
} from "../../../../componentExamples/products-table-example";
import { useState } from "react";
import CustomContainedButton from "../../../../components/CustomContainedButton/custom-contained-button";
import { useNavigate } from "react-router-dom";
import { HeightBoxSizes, WidthBoxSizes } from "../../../../components/types";
import { useTheme } from "@mui/material/styles";
import { FC } from "react";
import { pxToRem } from "../../../../../utils/px-to-rem";

export const OverviewTabContent: FC = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [selectedItemIdCategory, setSelectedItemIdCategory] =
    useState("allCategories");
  const [selectedItemIdStatus, setSelectedItemIdStatus] = useState("allStatus");

  const navigate = useNavigate();

  const handleAddNewProduct = () => {
    navigate("/projects/123/addnewproduct");
  };

  const categoryItems: { id: string; name: string }[] = [
    { id: "allCategories", name: "Todas as Categorias" },
    { id: "bebidas", name: "Bebidas" },
    { id: "combos", name: "Combos" },
    { id: "temakis", name: "Temakis" },
    { id: "niguiris", name: "Niguiris" },
    { id: "joes", name: "Joes" },
  ];

  const statusSearchItems: { id: string; name: string }[] = [
    { id: "allStatus", name: "Todos os Status" },
    { id: "active", name: "Ativo" },
    { id: "inactive", name: "Inativo" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "6px", sm: "6px", md: "6px", lg: "20px", xl: "24px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: {
            xs: "6px",
            sm: "6px",
            md: "6px",
            lg: pxToRem(552),
            xl: pxToRem(676),
          },
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(3),
            alignItems: "flex-end",
          }}
        >
          <SelectComponent
            items={categoryItems.map((item) => ({
              key: item.name,
              value: item.id,
            }))}
            changeHandler={setSelectedItemIdCategory}
            fieldWidth={WidthBoxSizes(useTheme()).medium}
            withLabel={true}
            label="Categoria"
            placeholder="Todas as Categorias"
          />
          <SelectComponent
            items={statusSearchItems.map((item) => ({
              key: item.name,
              value: item.id,
            }))}
            changeHandler={setSelectedItemIdStatus}
            fieldWidth={WidthBoxSizes(useTheme()).medium}
            withLabel={true}
            label="Status"
            placeholder="Todos os Status"
          />
          <SearchTextField
            value={search}
            changeHandler={setSearch}
            placeholder="Buscar por produto"
            icon={<SearchGradientIcon />}
            fieldWidth={WidthBoxSizes(useTheme()).large}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(3),
          }}
        >
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: pxToRem(44) }}
          />
          <Link href="/projects/123/addnewproduct" underline="none">
            <CustomContainedButton
              placeholder="Novo Produto"
              hasIcon={true}
              type="add"
              fieldWidth={WidthBoxSizes(useTheme()).small}
              fieldHeight={HeightBoxSizes(useTheme()).small}
            />
          </Link>
        </Box>
      </Box>

      <Box sx={{ width: "100%", minWidth: "100%", flex: 1 }}>
        <ProductTable
          rows={sampleRows}
          search={search}
          selectedCategory={selectedItemIdCategory}
          selectedStatus={selectedItemIdStatus}
        />
      </Box>
    </Box>
  );
};
