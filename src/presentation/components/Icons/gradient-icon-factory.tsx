/** @jsxImportSource @emotion/react */
import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

type GradientIconProps = {
  d: string;
  gradientId: string;
} & SvgIconProps;

export default function GradientIconFactory({
  d,
  gradientId,
  ...props
}: GradientIconProps) {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.palette.secondary.light} />
          <stop offset="100%" stopColor={theme.palette.secondary.main} />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={d} />
    </SvgIcon>
  );
}
