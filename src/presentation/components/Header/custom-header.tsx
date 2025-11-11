/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, useTheme } from "@mui/material";

type headerStyleOverrides = {
  backgroundColor?: string;
};

type CustomHeaderProps = {
  contents?: React.ReactNode[];
  styles?: headerStyleOverrides;
};

export default function CustomHeader({
  contents,
  styles = {},
}: CustomHeaderProps) {
  const theme = useTheme();
  const { backgroundColor = theme.customBackground.main } = styles;

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 1000,
        position: "relative",
        backgroundColor: backgroundColor,
        padding: {
          xs: "12px 2px 12px 10px",
          sm: "14px 10px 14px 20px",
          md: "16px",
          lg: "12px 24px",
          xl: "16px 32px",
        },
        borderBottom: "2px solid #f8c55fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {contents}
    </Box>
  );
}
