import { useState, useMemo, useEffect } from "react";
import {
  SidebarProps,
  OpenModulesState,
  FilteredSection,
  SidebarDimensions,
  SearchState,
} from "./sidebar.types";
import { pxToRem } from "../../../utils/px-to-rem";

export const useSidebar = (sections: SidebarProps["sections"]) => {
  const [openModules, setOpenModules] = useState<OpenModulesState>({});
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");

  const dimensions: SidebarDimensions = {
    // drawerWidth: 260,
    drawerWidth: pxToRem(290),
    collapsedWidth: pxToRem(60),
  };

  const searchState: SearchState = {
    search,
    searchLower: search.toLowerCase(),
  };

  const toggleModule = (key: string) => {
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDrawer = (opened?: boolean) => {
    setOpen((prev) => opened || !prev);
    if (!open) setOpenModules({});
  };

  const filteredSections = useMemo((): FilteredSection[] => {
    return sections.map((section) => ({
      ...section,
      modules: section.modules
        .map((mod) => {
          const moduleMatch = mod.title
            .toLowerCase()
            .includes(searchState.searchLower);
          const filteredItems = mod.items.filter((item) =>
            item.title.toLowerCase().includes(searchState.searchLower)
          );

          if (moduleMatch) {
            return { ...mod };
          }

          if (filteredItems.length > 0) {
            return { ...mod, items: filteredItems };
          }

          return null;
        })
        .filter(Boolean) as SidebarProps["sections"][number]["modules"],
    }));
  }, [sections, searchState.searchLower]);

  useEffect(() => {
    if (search.trim() === "") {
      setOpenModules({});
      return;
    }

    const expanded: OpenModulesState = {};
    filteredSections.forEach((section: SidebarProps["sections"][number]) => {
      section.modules.forEach(
        (mod: SidebarProps["sections"][number]["modules"][number]) => {
          const key = `${section.title}-${mod.title}`;
          if (mod.items.length > 0) {
            expanded[key] = true;
          }
        }
      );
    });
    setOpenModules((prev) => ({ ...prev, ...expanded }));
  }, [search, filteredSections]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleModuleClick = (moduleKey: string) => {
    toggleDrawer(true);
    toggleModule(moduleKey);
  };

  return {
    // State
    openModules,
    open,
    search,
    searchState,
    dimensions,

    // Computed values
    filteredSections,

    // Actions
    toggleModule,
    toggleDrawer,
    handleSearchChange,
    handleModuleClick,
  };
};
