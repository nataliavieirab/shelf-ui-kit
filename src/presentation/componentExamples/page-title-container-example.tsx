import { FastfoodIconGradient } from "../components/Icons/gradient-icons";
import PageTitleContainer from "../components/LayoutContainers/PageTitleContainer/page-title-container";

export default function PageTitleContainerExample() {
  const breadcrumbs = ["Gerência", "Operacional", "Produtos"];
  return (
    <PageTitleContainer
      pageTitle="Produtos"
      pageIcon={<FastfoodIconGradient sx={{ marginBottom: "8px" }} />}
      breadcrumbs={breadcrumbs}
    ></PageTitleContainer>
  );
}
