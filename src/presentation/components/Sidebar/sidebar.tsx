/** @jsxImportSource @emotion/react */
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  Box,
  TextField,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { pxToRem } from "../../../utils/px-to-rem";
import { SidebarClosedDisplay, SidebarProps } from "./sidebar.types";
import { useSidebar } from "./use-sidebar";
import {
  scrollStyle,
  sectionTitleStyle,
  drawerStyles,
  containerStyles,
  toggleButtonContainerStyles,
  toggleButtonStyles,
  searchIconStyles,
  searchInputProps,
  sectionContainerStyles,
  moduleButtonStyles,
  moduleIconStyles,
  moduleTextStyles,
  itemButtonStyles,
  itemTextStyles,
  simpleIconButtonStyle,
  textfieldStyles,
} from "./sidebar.styles";
import { useSidebarContext } from "./sidebar-context";
import { HeightBoxSizes, WidthBoxSizes } from "../types";
import { useTheme } from "@mui/material/styles";

export default function Sidebar({
  sections,
  collapseStyle,
  logo,
  searchStyles = {},
  projectId,
  drawerOverrideStyles = {},
}: SidebarProps) {
  const {
    openModules,
    search,
    dimensions,
    filteredSections,
    handleSearchChange,
    handleModuleClick,
  } = useSidebar(sections);

  const { open, toggleSidebar } = useSidebarContext();

  const theme = useTheme();

  const {
    searchFontColor = theme.palette.text.disabled,
    searchBackgroundColor = theme.customBackground.dark,
    searchBorder = theme.layoutMetrics.inputBox.border.defaultLightBorder,
    searchWidth = WidthBoxSizes(useTheme()).medium,
    searchHeight = HeightBoxSizes(useTheme()).small,
  } = searchStyles;

  const {
    drawerBackgroundColor = theme.customBackground.main,
    sectionFontColor = theme.palette.text.disabled,
  } = drawerOverrideStyles;

  return (
    <>
      {!open && collapseStyle === SidebarClosedDisplay.SimpleIconButton && (
        <Box
          sx={{ position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 1500 }}
        >
          <IconButton
            onClick={() => toggleSidebar(true)}
            sx={simpleIconButtonStyle(theme)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => toggleSidebar(false)}
        ModalProps={{ keepMounted: true }}
        sx={drawerStyles(
          open,
          dimensions.drawerWidth,
          dimensions.collapsedWidth,
          collapseStyle,
          drawerBackgroundColor
        )}
        PaperProps={{
          sx: { ...scrollStyle },
        }}
      >
        <Box sx={containerStyles}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: {
                xs: "2px 0px", // telas muito pequenas
                sm: "3px 0px", // tablets menores
                md: "4px 0px", // desktops menores
                lg: "10px 0px 8px 0px", // 1360x768 (TV)
                xl: "18px 0px 12px 0px", // 1920x1080 ou maiores
              },
              gap: {
                xs: "2px", // telas muito pequenas
                sm: "3px", // tablets menores
                md: "4px", // desktops menores
                lg: "12px", // 1360x768 (TV)
                xl: "28px", // 1920x1080 ou maiores
              },
              justifyContent: "flex-start",
            }}
          >
            <Box sx={toggleButtonContainerStyles(open)}>
              <IconButton
                onClick={() => toggleSidebar()}
                sx={toggleButtonStyles(theme)}
              >
                {open ? <MenuIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            {open && (
              <Box
                component="img"
                src={logo}
                alt="Sidebar Logo"
                sx={{
                  height: pxToRem(114),
                  opacity: open ? 1 : 0,
                  visibility: open ? "visible" : "hidden",
                  transition: "opacity 0.3s ease",
                }}
              />
            )}
          </Box>

          {open && (
            <Box
              style={{
                padding: theme.spacing(2),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <TextField
                  id="outlined-size-small"
                  size="small"
                  placeholder="Buscar..."
                  value={search}
                  sx={textfieldStyles(
                    theme,
                    searchFontColor,
                    searchWidth,
                    searchHeight,
                    searchBackgroundColor,
                    searchBorder
                  )}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon sx={searchIconStyles(theme)} />,
                  }}
                />
              </Box>
            </Box>
          )}
          {filteredSections.map((section) => (
            <Box key={section.title}>
              {open && (
                <Box sx={sectionContainerStyles(theme)}>
                  <Typography
                    variant="h4"
                    sx={sectionTitleStyle(sectionFontColor, theme)}
                  >
                    {section.title}
                  </Typography>
                </Box>
              )}

              {section.modules.map((mod) => {
                const moduleKey = `${section.title}-${mod.title}`;
                const isOpen = openModules[moduleKey];

                return (
                  <Box key={moduleKey}>
                    <ListItemButton
                      onClick={() => handleModuleClick(moduleKey)}
                      sx={moduleButtonStyles(theme)}
                    >
                      <ListItemIcon sx={moduleIconStyles(theme)}>
                        {mod.icon}
                      </ListItemIcon>
                      {open && (
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              sx={moduleTextStyles(theme)}
                            >
                              {mod.title}
                            </Typography>
                          }
                        />
                      )}
                      {open &&
                        (isOpen ? (
                          <ExpandLess sx={{ color: "white" }} />
                        ) : (
                          <ExpandMore sx={{ color: "white" }} />
                        ))}
                    </ListItemButton>

                    <Collapse in={isOpen && open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {mod.items.map((item) => (
                          <ListItemButton
                            key={item.title}
                            sx={itemButtonStyles(theme)}
                            onClick={() => item.action(projectId)}
                          >
                            <ListItemText
                              primary={
                                <Typography
                                  variant="body2"
                                  sx={itemTextStyles(theme)}
                                >
                                  {item.title}
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
