import {
  Box,
  IconButton,
  Link,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { pxToRem } from "../../../../utils/px-to-rem";

import React from "react";
import { PageTitleContainerStyles } from "./page-title-container.styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

type PageTitleProps = {
  pageTitle: string;
  pageIcon: React.ReactElement<{ sx?: SxProps<Theme> }>;
  breadcrumbs: string[];
  hasBackRoute?: boolean;
  backPageRoute?: string;
};
export default function PageTitleContainer({
  pageTitle = "",
  pageIcon,
  breadcrumbs,
  hasBackRoute = false,
  backPageRoute = "",
}: PageTitleProps) {
  const theme = useTheme();

  const pageStyles = PageTitleContainerStyles(theme);

  const navigate = useNavigate();

  const handleBackPage = () => {
    // navigate(backPageRoute);
  };

  return (
    <Box sx={pageStyles.wrapperContainer}>
      <Box sx={pageStyles.mainContentContainer}>
        <Box sx={pageStyles.pageTitleContainer}>
          {hasBackRoute && (
            <Link href={backPageRoute}>
              {/* lalala */}
              <IconButton
                // onClick={handleBackPage}
                sx={{
                  background: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "4px",
                  width: {
                    xs: pxToRem(32),
                    sm: pxToRem(32),
                    md: pxToRem(32),
                    lg: pxToRem(34),
                    xl: pxToRem(32),
                  },
                  height: {
                    xs: pxToRem(32),
                    sm: pxToRem(32),
                    md: pxToRem(32),
                    lg: pxToRem(32),
                    xl: pxToRem(32),
                  },
                  marginBottom: "4px",
                  marginRight: "4px",
                }}
              >
                <ArrowBackRoundedIcon
                  sx={{ color: "#282828", fontSize: "20px" }}
                />
              </IconButton>
            </Link>
          )}
          {React.cloneElement(pageIcon, {
            sx: {
              fontSize: {
                xs: pxToRem(32),
                sm: pxToRem(32),
                md: pxToRem(32),
                lg: pxToRem(32),
                xl: pxToRem(32),
              },
              color: theme.palette.secondary.main,
              ...(pageIcon.props.sx || {}),
            },
          })}
          <Typography variant="h1" sx={pageStyles.pageTitle}>
            {pageTitle}
          </Typography>
        </Box>
        <Box sx={pageStyles.breadcrumbsContainer}>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="body2"
                sx={pageStyles.breadcrumbItem(index === breadcrumbs.length - 1)}
              >
                {item}
              </Typography>
              {index < breadcrumbs.length - 1 && (
                <NavigateNextIcon sx={pageStyles.breadcrumbIcon} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
