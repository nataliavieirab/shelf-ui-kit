export const pxToRem = (px: number): string => `${px / 16}rem`;

const globalColors = {
  mainFirstColor: "#2E636E",
  darkMainColor: "#282828",
  blackSmoothColor: "#1C1C1C",
  lightFontColor: "#959595",
  lightBackgroundColor: "#F2F2F2",
  lightGrayColor: "#D3D3D3",
  blue: "#007BFF",
  ohanaMainColor: "#D39B21",
  ohanaSecondColor: "#FCE591",
  ohanaMainGradient: "linear-gradient(to right, #FCE591, #D39B21)",
  whiteColor: "white",
};

const ohanaPDVColors = {
  darkMainColor: "#282828",
  lightMainColor: "#f5f5f5",
  lightFontColor: "#959595",
  ohanaPrimaryColor: "#D39B21",
  ohanaSecondaryColor: "#FCE591",
  ohanaMainGradient: "linear-gradient(to right, #FCE591, #D39B21)",
  sidebar: {
    darkBackgroundColor: "#282828",
    lightBackgroundColor: "#FFFFFF",
  },
};

const gradientIconColors = {
  lightGradientColor: "FCE591",
  darkGradientColor: "D39B21",
};

const globalMetrics = {
  spacings: {
    none: "0",
    nano: "0.0625rem", // 1px
    micro: "0.125rem", // 2px
    xxxxs: "0.25rem", // 4px
    xxxs: "0.375rem", // 6px
    xm: "0.4375rem", // 7px
    xxs: "0.5rem", // 8px
    xss: "0.625rem", // 10px
    xs: "0.75rem", // 12px
    base: "0.875rem", // 14px
    sm: "1rem", // 16px
    smm: "1.125rem", //18px
    md: "1.5rem", // 24px
    mmd: "1.75rem", // 28px
    lg: "2rem", // 32px
    lgm: "2.125rem", // 34px
    llm: "2.25rem", // 36px
    lgg: "2.375rem", // 38px
    gxx: "2.5rem", // 40px
    lgx: "2.75rem", //44px
    xl: "3rem", // 48px
    xxl: "4rem", // 64px
    xxxl: "6rem", // 96px
  },
  colors: {
    darkFontColor: globalColors.darkMainColor,
    darkMainColor: globalColors.darkMainColor,
    inputBackgroundColor: globalColors.lightBackgroundColor,
    lightBackgroundColor: globalColors.lightBackgroundColor,
    white: globalColors.whiteColor,
    activeInputBorderColor: globalColors.darkMainColor,
    notActivePlaceholder: globalColors.lightFontColor,
    ohanaMainColor: globalColors.ohanaMainColor,
    ohanaSecondColor: ohanaPDVColors.ohanaSecondaryColor,
    ohanaMainGradient: globalColors.ohanaMainGradient,
    icons: {
      lightGradientColor: gradientIconColors.lightGradientColor,
      darkGradientColor: gradientIconColors.darkGradientColor,
    },
    gradientStart: "#FCE591",
    gradientEnd: "#D39B21",
  },
  fonts: {
    family: "'Poppins', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 900,
    },
    colors: {
      darkFontColor: globalColors.darkMainColor,
      lightFontColor: globalColors.lightFontColor,
    },
  },
  sidebar: {
    sections: {
      defaultFontSize: "0.85rem",
      defaultFontColor: "rgba(255, 255, 255, 0.6)",
      defaultPadding: `${pxToRem(8)} 0`,
      defaultLetterSpacing: "0.7px",
    },
    colors: {
      darkMode: {
        darkBackgroundColor: ohanaPDVColors.sidebar.darkBackgroundColor,
        searchBackgroundColor: ohanaPDVColors.sidebar.lightBackgroundColor,
        searchDarkBorderColor: "1px solid #333333",
      },
      lightMode: {
        lightColor: ohanaPDVColors.sidebar.lightBackgroundColor,
        lightBorderColor: "#959595",
      },
      search: {
        focusedBorderColor: "1px solid #D39B21",
        focusedGradientBorderColor:
          "linear-gradient(to right, #FCE591, #D39B21) 1",
        searchBlackBackgroundColor: globalColors.blackSmoothColor,
      },
    },
  },
  contentBar: {
    sizes: {
      paddings: {
        defaultBarPadding: `0 ${pxToRem(12)}`,
      },
      widths: {
        extraSmallBarWidth: pxToRem(180),
        smallBarWidth: pxToRem(205),
        semiMediumBarWidth: pxToRem(205),
        mediumBarWidth: pxToRem(250),
        largeBarWidth: pxToRem(350),
      },
      heights: {
        defaultBarHeight: pxToRem(52),
        smallBarHeight: pxToRem(42),
        extraSmallBarHeight: pxToRem(38),
        mediumBarHeight: pxToRem(48),
        largeBarHeight: pxToRem(50),
        buttonBarHeight: pxToRem(44),
      },
    },
    border: {
      defaultBorder: "1px solid rgba(33, 33, 33, 0.25)",
      defaultBorderRadius: pxToRem(8),
      lowerBorderRadius: pxToRem(6),
    },
    colors: {
      barBackgroundColor: ohanaPDVColors.ohanaPrimaryColor,
      searchBarBackgroundColor: globalColors.lightGrayColor,

      barHoverBorderColor: "rgba(33, 33, 33, 0.60",
      barBorderColor: "rgba(33, 33, 33, 0.25)",
      barLightBorderColor: ohanaPDVColors.lightMainColor,
      barFocusedBorderColor: "rgba(33, 33, 33, 0.25)",
      barFontColor: ohanaPDVColors.lightFontColor,
      barFocusedLabelColor: ohanaPDVColors.ohanaPrimaryColor,
    },
  },
};

export default globalMetrics;
