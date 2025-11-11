import { Box, useTheme } from "@mui/material";
import { FastfoodIconGradient } from "../../../components/Icons/gradient-icons";
import ProductsTabsContainer from "./ProductTabsContainer/products-tabs-container";
import PageTitleContainer from "../../../components/LayoutContainers/PageTitleContainer/page-title-container";
import { MainPageContentWrapperStyle } from "../../../styles/dynamic styles/main-page-wrapper-content-style";
import { MainContentContainerStyle } from "../../../styles/dynamic styles/main-content-container-style";

export default function ProductsMainPage() {
  const theme = useTheme();

  const breadcrumbs = ["Gerência", "Operacional", "Produtos"];

  return (
    <Box>
      <Box sx={MainPageContentWrapperStyle(theme)}>
        <PageTitleContainer
          pageTitle="Produtos"
          pageIcon={<FastfoodIconGradient sx={{ marginBottom: "8px" }} />}
          breadcrumbs={breadcrumbs}
        ></PageTitleContainer>

        <Box sx={MainContentContainerStyle(theme)}>
          <ProductsTabsContainer />
        </Box>
      </Box>
    </Box>
  );
}
