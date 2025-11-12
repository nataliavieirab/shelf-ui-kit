// src/index.ts - Entry Point do UIComponentKit

// 1. Exportação de Temas e Provedores de Tema
// Exporta a função para criar o tema customizado e o ThemeProvider.
// O tema específico do OhanaPDV (ohana-pdv-theme.tsx) deve ser movido para o OhanaPDV
// e o UIComponentKit deve exportar o mecanismo de criação de tema ou um tema base.
export * from "./theme_provider/create-custom-theme";
export * from "./theme_provider/theme-provider";

// 2. Exportação de Componentes
// Os componentes são exportados de seus respectivos diretórios.

// Botões
export * from "./presentation/components/CustomContainedButton/custom-contained-button";
export * from "./presentation/components/CustomOutlinedButton/custom-outlined-button";

// Data Grid
export * from "./presentation/components/CustomDataTable/custom-data-table";

// Formulários
export * from "./presentation/components/Textfields/InputTextfield/input-textfield";
export * from "./presentation/components/Textfields/PasswordTextfield/password-textfield";
export * from "./presentation/components/Textfields/SearchTextfield/search-textfield";
export * from "./presentation/components/Select/select";
export * from "./presentation/components/Datepicker/datepicker";
export * from "./presentation/components/CheckBox/CheckBoxWithLabel/checkbox-w-label";
export * from "./presentation/components/Switches/custom-switch";
export * from "./presentation/components/Switches/switch-with-label-example";

// Layout e Estrutura
export * from "./presentation/components/LayoutContainers/PageTitleContainer/page-title-container";
export * from "./presentation/components/TabsContainer/tabs-container";
export * from "./presentation/components/Sidebar/sidebar-context"; // Exporta o Contexto da Sidebar

// Outros Componentes
export * from "./presentation/components/ErrorBox/error-box";
export * from "./presentation/components/NewImage/new-image";
export * from "./presentation/components/Header/custom-header";

// Tipos
export * from "./types/mui.d";
