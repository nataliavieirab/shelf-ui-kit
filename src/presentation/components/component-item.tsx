/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

const itemWrapper = css`
  display: flex;
  flex-direction: column;
`;

const labelStyle = css`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #2d2d3a;
`;

export default function ComponentItem({ label, children }: Props) {
  return (
    <div css={itemWrapper}>
      <div css={labelStyle}>{label}</div>
      {children}
    </div>
  );
}
