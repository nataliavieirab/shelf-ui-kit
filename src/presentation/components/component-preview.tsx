/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const wrapperStyle = css`
  margin-bottom: 32px;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
  color: #1c1c2b;
`;

const boxStyle = css`
  border: 1px dashed #2d2d3a;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  overflow-x: scroll;
`;

export default function ComponentPreview({ title, children }: Props) {
  return (
    <div css={wrapperStyle}>
      <div css={titleStyle}>{title.toUpperCase()}</div>
      <div css={[boxStyle]}>{children}</div>
    </div>
  );
}
