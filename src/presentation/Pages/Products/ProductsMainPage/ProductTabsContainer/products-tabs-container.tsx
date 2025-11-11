import TabsContainer from "../../../../components/TabsContainer/tabs-container";
import { OverviewTabContent } from "./overview-tab-content";

export default function ProductsTabsContainer() {
  const labels = [
    "Visão Geral",
    "Importar Cadastros",
    "Ativar/Desativar Venda",
    "Sinc. Cardápio Integração",
    "Histórico de Alterações",
  ];

  const contents = [
    <div>
      <OverviewTabContent />
    </div>,
    <div>Conteúdo de Importar Cadastros</div>,
    <div>Conteúdo de Ativar/Desativar Venda</div>,
    <div>Conteúdo de Sinc. Cardápio Integração</div>,
    <div>Conteúdo de Histórico de Alterações</div>,
  ];

  return <TabsContainer tabLabels={labels} tabContents={contents} />;
}
