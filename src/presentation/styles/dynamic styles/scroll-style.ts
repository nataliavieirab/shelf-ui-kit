// src/styles/scroll-mixin.ts
import { SxProps, Theme } from "@mui/material";
import { pxToRem } from "../../../utils/px-to-rem";

export const scrollMixin: SxProps<Theme> = {
  overflowY: "auto",

  /* Scrollbar base */
  "::-webkit-scrollbar": {
    width: "8px",
  },

  /* Trilho (track) */
  "::-webkit-scrollbar-track": {
    background: "transparent",
    borderRadius: pxToRem(9999),
  },

  /* Thumb (a parte que se move) */
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#696969",
    borderRadius: pxToRem(9999),
    minHeight: "28px",
    border: "3px solid transparent",
    backgroundClip: "padding-box",
  },

  /* Botões e cantos (removidos) */
  "::-webkit-scrollbar-button": {
    display: "none",
    width: 0,
    height: 0,
  },
  "::-webkit-scrollbar-corner": {
    background: "transparent",
  },
};
