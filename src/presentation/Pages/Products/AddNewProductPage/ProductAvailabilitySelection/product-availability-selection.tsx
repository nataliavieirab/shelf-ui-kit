import { Box, Typography } from "@mui/material";
import CheckBoxWithLabel from "../../../../components/CheckBox/CheckBoxWithLabel/checkbox-w-label";
import { pxToRem } from "../../../../../utils/px-to-rem";

export default function ProductAvailabilitySelection() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Typography variant="h2">2. Disponibilidade </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "3.375rem ",
          gap: pxToRem(40),
        }}
      >
        <CheckBoxWithLabel label="Segunda" />
        <CheckBoxWithLabel label="Terça" />
        <CheckBoxWithLabel label="Quarta" />
        <CheckBoxWithLabel label="Quinta" />
        <CheckBoxWithLabel label="Sexta" />
        <CheckBoxWithLabel label="Sábado" />
        <CheckBoxWithLabel label="Domingo" />
      </Box>
    </Box>
  );
}
