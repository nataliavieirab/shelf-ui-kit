import React, { ReactNode, useMemo } from "react";
import { globalColors, GlobalColors } from "../themes/baseTokens/colors";
import { createCustomTheme } from "./create-custom-theme";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

interface BrandTheme {
  colors: Partial<typeof globalColors>;
}

interface ThemeProviderProps {
  children: ReactNode;
  brandTheme?: BrandTheme;
}

export const CustomThemeProvider = ({
  children,
  brandTheme,
}: ThemeProviderProps) => {
  const theme = useMemo(
    () => createCustomTheme({ colors: brandTheme?.colors ?? globalColors }),
    [brandTheme]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
