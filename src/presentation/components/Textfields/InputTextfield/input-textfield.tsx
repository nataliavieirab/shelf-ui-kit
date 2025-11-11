import { Box, TextField, Typography, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { WidthBoxSizes } from "../../types";
import { InputProps } from "./input-textfield.types";
import { useState } from "react";
import ErrorBox from "../../ErrorBox/error-box";
import {
  boxStyle,
  labelStyles,
  inputWrapperErrorStyle,
  textfieldStyles,
} from "../textfield.styles";

export default function InputTextField({
  placeholder = "",
  withLabel = false,
  value,
  label = "",
  valueHandler,
  errors = [],
  messageBoxOnBottom = false,
  fieldWidth = WidthBoxSizes(useTheme()).small,
}: InputProps) {
  const [hoveredInfo, setHoveredInfo] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHoveredInfo(true);
  };

  const handleMouseLeave = () => {
    setHoveredInfo(false);
  };

  return (
    <Box sx={inputWrapperErrorStyle}>
      <Box sx={boxStyle}>
        {withLabel && (
          <Typography variant="caption" sx={labelStyles}>
            {label}
          </Typography>
        )}
        <TextField
          sx={textfieldStyles(fieldWidth)}
          required
          id="outlined-size-small"
          size="small"
          variant="outlined"
          placeholder={placeholder}
          value={value}
          onChange={(e) => valueHandler(e.target.value)}
        />
      </Box>
      {errors.length > 0 && (
        <InfoIcon
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            right: "-16px",
            top: "26px",
            color: "red",
          }}
        />
      )}
      <ErrorBox
        errors={errors}
        showBox={hoveredInfo}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        messageBoxOnBottom={messageBoxOnBottom}
      />
    </Box>
  );
}
