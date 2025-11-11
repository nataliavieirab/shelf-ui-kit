import { Box, Typography } from "@mui/material";
import NewImage from "../../../../components/NewImage/new-image";
import InputTextField from "../../../../components/Textfields/InputTextfield/input-textfield";
import SelectComponent from "../../../../components/Select/select";
import UseBasicPruductInformation from "./use-basic-product--infos";
import CustomSwitch from "../../../../components/Switches/custom-switch";
import { pxToRem } from "../../../../../utils/px-to-rem";

export default function BasicProductInformation() {
  const {
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
  } = UseBasicPruductInformation();

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Typography variant="h2">1. Informações Básicas</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          aligntItems: "center",
          padding: "3.375rem",
          gap: pxToRem(100),
        }}
      >
        <NewImage />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            alignItems: "flex-start",
            gap: pxToRem(32),
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: pxToRem(40),
              paddingLeft: "10px",
            }}
          >
            <CustomSwitch
              isActive={isSaleProduct}
              onChange={setIsSaleProduct}
              label="Venda"
              withLabel
            />
            <CustomSwitch
              isActive={isSupplyProduct}
              onChange={setIsSupplyProduct}
              label="Insumo"
              withLabel
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDiretion: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItens: "flex-start",
            }}
          >
            <InputTextField
              value={productName}
              withLabel={true}
              label="Nome *"
              valueHandler={setProductName}
              // errors={errors}
              fieldWidth={pxToRem(350)}
              messageBoxOnBottom={true}
            />
            <SelectComponent
              items={categoryItems.map((item) => ({
                key: item.name,
                value: item.id,
              }))}
              changeHandler={setSelectedItemIdCategory}
              fieldWidth={pxToRem(350)}
              withLabel={true}
              label="Categoria *"
              placeholder=""
            />
            <InputTextField
              value={productWeight}
              withLabel={true}
              label="Peso "
              valueHandler={setProductWeight}
              // errors={errors}
              fieldWidth={pxToRem(350)}
              messageBoxOnBottom={true}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDiretion: "row",
              alignItens: "flex-start",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <SelectComponent
              items={unitsOfMeasurementItems.map((item) => ({
                key: item.name,
                value: item.id,
              }))}
              changeHandler={setSelectedItemIdUnits}
              fieldWidth={pxToRem(350)}
              withLabel={true}
              label="Unidade de Medida "
            />
            <InputTextField
              value={productName}
              withLabel={true}
              label="Custo unitário *"
              valueHandler={setProductName}
              // errors={errors}
              fieldWidth={pxToRem(350)}
              messageBoxOnBottom={true}
            />

            <InputTextField
              value={productWeight}
              withLabel={true}
              label="Preço Venda "
              valueHandler={setProductWeight}
              // errors={errors}
              fieldWidth={pxToRem(350)}
              messageBoxOnBottom={true}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDiretion: "row",
              alignItens: "flex-start",
              width: "100%",
            }}
          >
            <InputTextField
              value={productWeight}
              withLabel={true}
              label="Descrição"
              valueHandler={setProductWeight}
              fieldWidth={pxToRem(1200)}
              messageBoxOnBottom={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
