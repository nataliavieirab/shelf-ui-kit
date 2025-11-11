import { ReactElement, ReactNode } from "react";
import { searchStyleOverrides } from "./SearchTextfield/search.types";

export interface SidebarItem {
  title: string;
  // action: () => void;
  action: (projectId?: string) => void;
}

export interface SidebarModule {
  title: string;
  icon: ReactElement;
  items: SidebarItem[];
}

export interface SidebarSection {
  title: string;
  modules: SidebarModule[];
}

export interface SidebarProps {
  sections: SidebarSection[];
  collapseStyle: SidebarClosedDisplay;
  logo?: string;
  searchStyles?: searchStyleOverrides;
  projectId?: string;
  drawerOverrideStyles?: drawerStyleOverrides;
}

export type drawerStyleOverrides = {
  drawerBackgroundColor?: string;
  sectionFontColor?: string;
};
export interface OpenModulesState {
  [key: string]: boolean;
}

export interface FilteredSection extends SidebarSection {
  modules: SidebarModule[];
}

export interface SidebarDimensions {
  drawerWidth: string;
  collapsedWidth: string;
}

export interface SearchState {
  search: string;
  searchLower: string;
}

export enum SidebarClosedDisplay {
  ShowItemsPreview = "ShowItemsPreview",
  SimpleIconButton = "SimpleIconButton",
}
