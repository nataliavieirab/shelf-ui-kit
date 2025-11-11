import { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  open: boolean;
  toggleSidebar: (open?: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const toggleSidebar = (value?: boolean) => {
    setOpen((prev) => (typeof value === "boolean" ? value : !prev));
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
}
