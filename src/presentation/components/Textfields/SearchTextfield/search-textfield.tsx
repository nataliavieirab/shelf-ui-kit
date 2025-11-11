/** @jsxImportSource @emotion/react */
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import { SearchProps } from "./search-textfield.types";
import { WidthBoxSizes } from "../../types";
import { useTheme } from "@mui/material/styles";
import { labelStyles, textfieldStyles } from "../textfield.styles";
import { SearchGradientIcon } from "../../Icons/gradient-icons";

export default function SearchTextField({
  value,
  changeHandler,
  placeholder = "Buscar...",
  withLabel = false,
  label = "",
  fieldWidth = WidthBoxSizes(useTheme()).small,
  disabled = false,
}: SearchProps) {
  return (
    <Box>
      {withLabel && (
        <Typography variant="caption" sx={labelStyles}>
          {label}
        </Typography>
      )}
      <TextField
        value={value}
        id="outlined-size-small"
        size="small"
        sx={textfieldStyles(fieldWidth)}
        onChange={(e) => changeHandler(e.target.value)}
        placeholder={placeholder}
        variant="outlined"
        disabled={disabled}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchGradientIcon
                style={{ width: "1.7rem", height: "1.7rem" }}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
