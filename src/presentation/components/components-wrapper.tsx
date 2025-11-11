/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ComponentItem from "./component-item";
import ComponentPreview from "./component-preview";
import { ReactNode } from "react";

const rowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

type Props = {
  items: {
    label: string;
    component: ReactNode;
  }[];
  title: string;
};
export default function ComponentsWrapper({ items, title }: Props) {
  return (
    <ComponentPreview title={title}>
      <div css={rowStyle}>
        {items.map(({ label, component }) => (
          <ComponentItem key={label} label={label}>
            {component}
          </ComponentItem>
        ))}
      </div>
    </ComponentPreview>
  );
}
