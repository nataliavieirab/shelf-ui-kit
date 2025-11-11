/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const containerStyle = css({
  display: "flex",
  justifyContent: "flex-start",
  padding: "4px 16px",
});

export const paperStyle = css({
  width: "100%",
  // maxWidth: "1300px",
  borderRadius: "none",
  overflow: "hidden",
  // boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
  boxShadow: "none",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
});

export const tabsHeaderStyle = {
  borderBottom: "1px solid #eee",
  backgroundColor: "#fff",
};

export const contentStyle = css({
  // width: "100%",
  flex: 1,
  padding: "24px 2px",
  backgroundColor: "#fff",
});
