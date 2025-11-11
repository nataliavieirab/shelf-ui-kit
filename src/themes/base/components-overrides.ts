import { Components, Theme } from "@mui/material/styles";
import { pxToRem } from "../../utils/px-to-rem";

export const componentsOverrides = (theme: Theme): Components => ({
  MuiInputBase: {
    styleOverrides: {
      root: () => ({
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.common.white,
        paddingRight: "10px !important",
      }),
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: () => ({
        color: theme.palette.text.primary,
      }),
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: () => ({
        color: theme.palette.text.primary,
        "&.Mui-focused": {
          color: theme.palette.secondary.main,
        },
      }),
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: () => ({
        color: theme.palette.text.primary,
        "& fieldset": {
          borderRadius: theme.shape.borderRadius,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.main,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.main,
          borderWidth: "1px",
        },
      }),
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius:
          theme.layoutMetrics.inputBox.border.borderRadius.defaultBorderRadius,
      },
    },
  },

  MuiButtonBase: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        color: theme.palette.secondary.main,
      },
    },
  },

  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius + " !important",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.customBackground.main,
          minHeight: theme.spacing(4.25) + " !important", // 46px
          maxHeight: theme.spacing(4.25) + " !important", // 46px
          height: theme.spacing(4.25) + " !important", // 46px
          lineHeight: theme.spacing(4.25) + " !important", // 46px
          ".MuiDataGrid-scrollbarFiller": {
            backgroundColor: theme.customBackground.main + " !important",
          },
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: theme.customBackground.main + " !important",
          minHeight: theme.spacing(5.75) + " !important",
          maxHeight: theme.spacing(5.75) + " !important",
          height: theme.spacing(5.75) + " !important",
          lineHeight: theme.spacing(5.75) + " !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          background: theme.customGradients.primary,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .MuiDataGrid-sortIcon": {
          color: theme.palette.secondary.main,
        },
        "& .MuiDataGrid-virtualScroller": {
          overflowY: "auto !important",
          scrollbarWidth: "thin",
          scrollbarColor: "#b0b0b0 transparent",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#b0b0b0",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#888",
          },
        },
        "& .MuiDataGrid-virtualScrollerContent": {
          overflowY: "visible !important",
        },
      }),
    },
  },
  MuiSvgIcon: {
    variants: [
      {
        props: { fontSize: "small" },
        style: { fontSize: pxToRem(10) },
      },
      {
        props: { fontSize: "medium" },
        style: { fontSize: pxToRem(20) },
      },
      {
        props: { fontSize: "large" },
        style: { fontSize: pxToRem(28) },
      },
    ],
    styleOverrides: {
      root: {
        verticalAlign: "middle",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
  },
});
