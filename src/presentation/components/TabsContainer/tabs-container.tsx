/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import { css } from "@emotion/react";
import {
  containerStyle,
  contentStyle,
  paperStyle,
  tabsHeaderStyle,
} from "./tabs-container.styles";
import { TabsContainerProps } from "./tabs-containet.types";

export default function TabsContainer({
  tabLabels,
  tabContents,
}: TabsContainerProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box css={containerStyle}>
      <Paper css={paperStyle}>
        <Box sx={tabsHeaderStyle}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} />
            ))}
          </Tabs>
        </Box>

        <Box css={contentStyle}>{tabContents[value] ?? <div />}</Box>
      </Paper>
    </Box>
  );
}
