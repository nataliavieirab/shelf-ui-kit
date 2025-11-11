import { pxToRem } from "../../utils/px-to-rem";

export const layoutMetrics = {
  inputBox: {
    widths: {
      extraSmall: pxToRem(180),
      small: pxToRem(205),
      semiMedium: pxToRem(205),
      medium: pxToRem(250),
      large: pxToRem(350),
      extraLarge: pxToRem(800),
    },
    heights: {
      default: "34.25px",
      button: pxToRem(44),
      extraSmall: pxToRem(38),
      small: pxToRem(42),
      medium: pxToRem(48),
      large: pxToRem(50),
    },
    border: {
      defaultBorder: "1px solid rgba(33, 33, 33, 0.25)",
      defaultLightBorder: "1px solid #363636",
      borderRadius: {
        defaultBorderRadius: pxToRem(8),
        mediumBorderRadius: pxToRem(6),
        lowerBorderRadius: pxToRem(4),
      },
    },
    paddings: {
      defaultBarPadding: `0 ${pxToRem(12)}`,
    },
  },
};
