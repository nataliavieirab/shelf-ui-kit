import { pxToRem } from "../../utils/px-to-rem";

export const typography = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  variants: {
    h1: { fontSize: pxToRem(26), fontWeight: 500, lineHeight: 1.6 },
    h2: { fontSize: pxToRem(18), fontWeight: 500, lineHeight: 1.3 },
    h3: {
      fontSize: pxToRem(14),
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.04rem",
    },
    h4: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      // lineHeight: 1,
      letterSpacing: "0.04rem",
    },
    body1: { fontSize: pxToRem(16), fontWeight: 400, lineHeight: 1 },
    body2: { fontSize: pxToRem(14), fontWeight: 400, lineHeight: 1 },
    subtitle1: { fontSize: pxToRem(14), fontWeight: 600, lineHeight: 1.7 },
    subtitle2: { fontSize: pxToRem(14), fontWeight: 500, lineHeight: 1.57 },
    caption: {
      fontSize: pxToRem(16),
      fontWeight: 500,
      lineHeight: 1,
      TextTransform: "none",
      letterSpacing: "0.01rem",
    },
    overline: { fontSize: pxToRem(12), fontWeight: 400, lineHeight: 1 },
    button: {
      fontSize: pxToRem(16),
      fontWeight: 500,
      TextTransform: "none",
      lineHeight: 1,
    },
  },
};
