import { Box, useTheme } from "@mui/material";
import { FastfoodIconGradient } from "../../../components/Icons/gradient-icons";
import { MainPageContentWrapperStyle } from "../../../styles/dynamic styles/main-page-wrapper-content-style";
import PageTitleContainer from "../../../components/LayoutContainers/PageTitleContainer/page-title-container";
import { MainContentContainerStyle } from "../../../styles/dynamic styles/main-content-container-style";
import BasicProductInformation from "./BasicProductInfo/basic-product-information";
import ProductAvailabilitySelection from "./ProductAvailabilitySelection/product-availability-selection";

export default function AddNewProductPage() {
  const theme = useTheme();

  const breadcrumbs = [
    "Gerência",
    "Operacional",
    "Produtos",
    "Adicionar Produto",
  ];

  return (
    <Box>
      <Box sx={MainPageContentWrapperStyle(theme)}>
        <PageTitleContainer
          pageTitle="Adicionar Produto"
          pageIcon={<FastfoodIconGradient sx={{ marginBottom: "0.625rem" }} />}
          breadcrumbs={breadcrumbs}
          hasBackRoute={true}
          backPageRoute="/projects/123/products"
        ></PageTitleContainer>

        <Box sx={MainContentContainerStyle(theme)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "3.375rem 3.375rem 3.375rem",
              gap: "24px",
            }}
          >
            <BasicProductInformation />
            <ProductAvailabilitySelection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
