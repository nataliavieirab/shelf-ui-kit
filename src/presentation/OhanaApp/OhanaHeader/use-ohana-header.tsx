import React from "react";
import { HeaderMenuProps } from "./ohana-header.types";
import { Theme, useMediaQuery } from "@mui/material";

export const useOhanaHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = () => {
    // Lógica futura para notificações
    console.log("Notificação clicada");
  };

  const menuProps: HeaderMenuProps = {
    anchorEl,
    open,
    onClose: handleMenuClose,
  };

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return {
    anchorEl,
    open,
    handleMenuClick,
    handleMenuClose,
    handleNotificationClick,
    menuProps,
    smDown,
    mdDown,
  };
};
