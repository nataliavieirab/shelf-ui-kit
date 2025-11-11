import { styled } from "@mui/material/styles";
import Switch, { SwitchProps as MUISwitchProps } from "@mui/material/Switch";

export const IOSSwitch = styled((props: MUISwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        background: theme.customGradients.primary,
        opacity: 1,
        border: 0,
        ...(theme.palette.mode === "dark"
          ? { backgroundColor: theme.customGradients.primary }
          : {}),
      },

      "& .MuiSwitch-thumb": {
        boxShadow: `
          0px 2px 4px rgba(0, 0, 0, 0.25),
          0px 0px 6px 2px rgba(255, 204, 0, 0.4)
        `,
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.secondary.light,
      border: "6px solid #fff",
    },

    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...(theme.palette.mode === "dark"
        ? { color: theme.palette.grey[600] }
        : {}),
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...(theme.palette.mode === "dark" ? { opacity: 0.3 } : {}),
    },
  },

  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1)", // sombra sutil
    transition: theme.transitions.create(["transform", "box-shadow"], {
      duration: 300,
    }),
  },

  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...(theme.palette.mode === "dark" ? { backgroundColor: "#39393D" } : {}),
  },
}));
