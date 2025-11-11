import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";
import { SelectProps } from "./select.types";
import { ArrowDropDownIcon } from "../../components/Icons/gradient-icons";
import { labelStyles, selectStyles } from "./select.styles";
import { TextField, Typography } from "@mui/material";
import { boxStyle } from "./SelectSearchTextfield/select-search-textfield.styles";
import { HeightBoxSizes, WidthBoxSizes } from "../types";
import { useTheme } from "@mui/material/styles";

export default function SelectComponent({
  items,
  label = "",
  initialValue,
  changeHandler,
  withSearch = false,
  withLabel = false,
  blocked = false,
  searchHeight = HeightBoxSizes(useTheme()).default,
  searchWidth = WidthBoxSizes(useTheme()).small,
  fieldWidth = WidthBoxSizes(useTheme()).small,
  fieldHeight = HeightBoxSizes(useTheme()).default,
  styles = {},
  searchStyles = {},
}: SelectProps) {
  const theme = useTheme();

  const {
    backgroundColor = theme.palette.common.white,
    fontColor = theme.palette.text.primary,
    fontSize = "1rem",
  } = styles;

  const {
    searchBorder = "none",
    searchBorderRadius = theme.layoutMetrics.inputBox.border.borderRadius
      .lowerBorderRadius,
    searchBackgroundColor = theme.palette.grey[200],
    searchBoxWidth = searchWidth,
    searchBoxHeight = searchHeight,
  } = searchStyles;

  const [filteredItems, setFilteredItems] = useState(
    items.length === 0 ? [] : items
  );
  const [value, setValue] = useState(initialValue || filteredItems[0]?.value);

  useEffect(() => {
    setTimeout(() => {
      setFilteredItems(items);
      const newValue = initialValue || filteredItems[0]?.value;
      setValue(newValue);
      changeHandler(newValue);
    }, 200);
  }, [initialValue]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    changeHandler(selectedValue);
  };

  const inputRef = useRef<any>(null);
  const [selectOpened, setSelectOpened] = useState(false);

  return (
    <Box sx={{ minWidth: fieldWidth }}>
      <FormControl fullWidth>
        {withLabel && (
          <Typography variant="caption" sx={labelStyles}>
            {label}
          </Typography>
        )}

        <Select
          IconComponent={ArrowDropDownIcon}
          sx={selectStyles(fontColor, fontSize, backgroundColor, fieldHeight)}
          autoComplete="off"
          inputProps={{ autoComplete: "off", readOnly: blocked }}
          MenuProps={{
            disableAutoFocusItem: true,
          }}
          onKeyDown={(event) => event.stopPropagation()}
          value={value}
          onChange={handleChange}
          onOpen={() => {
            setSelectOpened(true);
            if (withSearch) {
              setTimeout(() => {
                if (inputRef.current) {
                  setFilteredItems(items);
                  inputRef.current.value = "";
                  inputRef.current.focus();
                }
              }, 100);
            }
          }}
          onClose={() => {
            setSelectOpened(false);
            setFilteredItems(items);
          }}
        >
          {withSearch && (
            <Box
              style={{
                paddingBottom: theme.spacing(1),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={boxStyle(
                  searchBoxWidth,
                  searchBoxHeight,
                  searchBackgroundColor,
                  searchBorderRadius,
                  searchBorder
                )}
              >
                <TextField
                  fullWidth
                  inputRef={inputRef}
                  placeholder="Pesquisar..."
                  onKeyDown={(event) => event.stopPropagation()}
                  onChange={(e) => {
                    setFilteredItems(
                      items.filter((item) =>
                        item.key
                          .toUpperCase()
                          .includes(e.target.value.toUpperCase())
                      )
                    );
                  }}
                />
              </Box>
            </Box>
          )}

          {filteredItems.map((item) => (
            <MenuItem key={String(item.value)} value={item.value}>
              {item.label || item.key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
