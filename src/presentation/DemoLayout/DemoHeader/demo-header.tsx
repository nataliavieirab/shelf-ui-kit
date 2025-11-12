import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import CustomHeader from "../../components/Header/custom-header";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { DemoHeaderProps } from "./demo-header.types";
import { getHeaderStyles } from "./demo-header.styles";
import { useOhanaHeader } from "./use-demo-header";
import { ArrowDropDownIcon } from "../../components/Icons/gradient-icons";
import { useSidebarContext } from "../../components/Sidebar/sidebar-context";
import { pxToRem } from "../../../utils/px-to-rem";
import DemoHeaderSelect from "./HeaderSelect/demo-header.select";

export default function DemoHeader({
  currentUserName,
  currentUserRole,
  currentUserAvatar,
}: DemoHeaderProps) {
  const theme = useTheme();
  const { handleMenuClick, handleNotificationClick, menuProps, smDown } =
    useOhanaHeader();

  const headerStyles = getHeaderStyles(theme);

  const { toggleSidebar } = useSidebarContext();

  const headerContents = [
    <Box key="menu" sx={headerStyles.headerContainer}>
      <IconButton
        onClick={() => toggleSidebar(true)}
        sx={{
          mr: 1,
          display: "flex",
          alignSelf: "flex-start",
          backgroundColor: "rgb(28, 28, 28, 0.8)",
          border: "1px solid #363636",
          borderRadius: "4px",
          width: "2.375rem",
          height: "2.375rem",
        }}
      >
        <MenuIcon sx={{ color: "white", fontSize: pxToRem(22) }} />
      </IconButton>
    </Box>,

    <Box key="actions" sx={headerStyles.actionsContainer}>
      <DemoHeaderSelect />
      <IconButton
        onClick={handleNotificationClick}
        sx={{
          backgroundColor: "rgb(28, 28, 28, 0.8)",
          border: "1px solid #363636",
          borderRadius: "4px",
          width: "2.375rem",
          height: "2.375rem",
        }}
      >
        <NotificationsRoundedIcon sx={headerStyles.notificationIcon} />
      </IconButton>

      <Divider orientation="vertical" flexItem sx={headerStyles.divider} />

      <Box sx={headerStyles.userProfileContainer}>
        <Avatar
          alt={currentUserName}
          src={currentUserAvatar}
          sx={headerStyles.userAvatar}
        />

        {!smDown && (
          <Box sx={headerStyles.userInfoContainer}>
            <Typography variant="h3" sx={headerStyles.userName}>
              {currentUserName}
            </Typography>
            <Typography variant="h4" sx={headerStyles.userRole}>
              {currentUserRole}
            </Typography>
          </Box>
        )}
        <Tooltip title="Opções">
          <IconButton
            onClick={handleMenuClick}
            sx={headerStyles.dropdownButton}
          >
            <ArrowDropDownIcon sx={headerStyles.dropdownIcon} />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={menuProps.anchorEl}
          open={menuProps.open}
          onClose={menuProps.onClose}
        >
          <MenuItem onClick={menuProps.onClose}>Profile</MenuItem>
          <MenuItem onClick={menuProps.onClose}>Settings</MenuItem>
          <MenuItem onClick={menuProps.onClose}>My Account</MenuItem>
          <Divider />
          <MenuItem onClick={menuProps.onClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>,
  ];

  return <CustomHeader contents={headerContents} />;
}
