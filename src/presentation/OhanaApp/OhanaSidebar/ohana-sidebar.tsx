import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import {
  ClipBoardIcon,
  DashboardIcon,
  PeopleAltIcon,
  RegistrationIcon,
  SettingsIcon,
  StoreIcon,
} from "../../components/Icons/gradient-icons";
import { SidebarClosedDisplay } from "../../components/Sidebar/sidebar.types";
import logoUrl from "../../../assets/Logohana.svg";
import { ThemeContext } from "@emotion/react";

export default function OhanaSidebar() {
  const navigate = useNavigate();
  const { projectid } = useParams();

  return (
    <Sidebar
      projectId={projectid}
      sections={[
        {
          title: "Menu Principal",
          modules: [
            {
              title: "Dashboard",
              icon: DashboardIcon,
              items: [
                {
                  title: "Visão Geral",
                  action: (id) => navigate(`/projects/${id}/overview`),
                },
                {
                  title: "Indicadores de Vendas",
                  action: (id) => navigate(`/projects/${id}/salesindicators`),
                },
                {
                  title: "Gráficos e KPIs",
                  action: (id) => navigate(`/projects/${id}/graphics`),
                },
              ],
            },
          ],
        },
        {
          title: "PDV",
          modules: [
            {
              title: "Configurações",
              icon: SettingsIcon,
              items: [
                {
                  title: "Cardápio",
                  action: (id) => navigate(`/projects/${id}/products`),
                },
                {
                  title: "Pedidos Abertos",
                  action: (id) => navigate(`/projects/${id}/openorders`),
                },
                {
                  title: "Pedidos Finalizados",
                  action: (id) => navigate(`/projects/${id}/finishedorders`),
                },
              ],
            },
            {
              title: "Relatórios",
              icon: ClipBoardIcon,
              items: [
                {
                  title: "Gerenciar Mesas",
                  action: (id) => navigate(`/projects/${id}/tablesmanagement`),
                },
                {
                  title: "Mapeamento de Salão",
                  action: (id) => navigate(`/projects/${id}/hallmap`),
                },
              ],
            },
          ],
        },

        {
          title: "Financeiro",
          modules: [
            {
              title: "Cadastros",
              icon: RegistrationIcon,
              items: [
                {
                  title: "Visão Geral",
                  action: (id) => navigate(`/projects/${id}/overview`),
                },
                {
                  title: "Contas a Pagar",
                  action: (id) => navigate(`/projects/${id}/accountspayable`),
                },
                {
                  title: "Contas a Receber",
                  action: (id) =>
                    navigate(`/projects/${id}/accountsreceivable`),
                },
                {
                  title: "Lançamentos",
                  action: (id) => navigate(`/projects/${id}/accountingentries`),
                },
              ],
            },
            {
              title: "Dashboard",
              icon: DashboardIcon,
              items: [
                {
                  title: "Fechamentos Diários",
                  action: (id) => navigate(`/projects/${id}/dailyclosing`),
                },
                {
                  title: "Resumo de Vendas",
                  action: (id) => navigate(`/projects/${id}/salessummary`),
                },
                {
                  title: "Relatório de Pagamentos",
                  action: (id) => navigate(`/projects/${id}/paymentssummary`),
                },
              ],
            },
          ],
        },
        {
          title: "Administração",
          modules: [
            {
              title: "Usuários e Permissões",
              icon: PeopleAltIcon,
              items: [
                {
                  title: "Funcionários",
                  action: (id) => navigate(`/projects/${id}/employees`),
                },
                {
                  title: "Perfis de Acesso",
                  action: (id) => navigate(`/projects/${id}/profiles`),
                },
              ],
            },
            {
              title: "Configurações",
              icon: SettingsIcon,
              items: [
                { title: "Empresa", action: () => console.log("Empresa") },
                {
                  title: "Impressoras",
                  action: (id) => navigate(`/projects/${id}/printers`),
                },
                {
                  title: "Tributação",
                  action: (id) => navigate(`/projects/${id}/taxing`),
                },
                {
                  title: "Integrações",
                  action: (id) => navigate(`/projects/${id}/integrations`),
                },
              ],
            },
            {
              title: "Filiais / Lojas",
              icon: StoreIcon,
              items: [
                {
                  title: "Gerenciar Lojas",
                  action: (id) =>
                    navigate(`/projects/${id}/franchisemanagement`),
                },
                {
                  title: "Configurações por Loja",
                  action: (id) => navigate(`/projects/${id}/franchisesettings`),
                },
              ],
            },
          ],
        },
        {
          title: "Exemplo",
          modules: [
            {
              title: "Usuários e Permissões",
              icon: PeopleAltIcon,
              items: [
                {
                  title: "Funcionários",
                  action: (id) => navigate(`/projects/${id}/employees`),
                },
                {
                  title: "Perfis de Acesso",
                  action: (id) => navigate(`/projects/${id}/profiles`),
                },
              ],
            },
            {
              title: "Configurações",
              icon: SettingsIcon,
              items: [
                { title: "Empresa", action: () => console.log("Empresa") },
                {
                  title: "Impressoras",
                  action: (id) => navigate(`/projects/${id}/printers`),
                },
                {
                  title: "Tributação",
                  action: (id) => navigate(`/projects/${id}/taxing`),
                },
                {
                  title: "Integrações",
                  action: (id) => navigate(`/projects/${id}/integrations`),
                },
              ],
            },
            {
              title: "Filiais / Lojas",
              icon: StoreIcon,
              items: [
                {
                  title: "Gerenciar Lojas",
                  action: (id) =>
                    navigate(`/projects/${id}/franchisemanagement`),
                },
                {
                  title: "Configurações por Loja",
                  action: (id) => navigate(`/projects/${id}/franchisesettings`),
                },
              ],
            },
          ],
        },
      ]}
      collapseStyle={SidebarClosedDisplay.ShowItemsPreview}
      logo={logoUrl}
    />
  );
}
