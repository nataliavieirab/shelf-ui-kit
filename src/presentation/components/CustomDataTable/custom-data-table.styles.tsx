import { Box } from "@mui/material";

export const wrapCentered = (children: React.ReactNode) => (
  <Box display="flex" alignItems="center" justifyContent="center" width="100%">
    {children}
  </Box>
);
