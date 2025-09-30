import { css } from "@emotion/react";
import { colors, typography } from "@repo/tokens";

export const VariantMap = {
  solid: css`
    background-color: ${colors.primary[500]};
    color: ${colors.ui.surface};
    border: none;
  `,
  outline: css`
    border: 1px solid ${colors.primary[500]};
    color: ${colors.primary[500]};
    background-color: ${colors.ui.surface};
  `,
  error: css`
    background-color: ${colors.status.error};
    color: ${colors.ui.surface};
    border: none;
  `,
  errorOutline: css`
    background-color: ${colors.ui.surface};
    color: ${colors.status.error};
    border: 1px solid ${colors.status.error};
  `,
} as const;

export const SizeMap = {
  small: css`
    font-size: ${typography.fontSize.sm};
    padding: 6px 12px;
    height: 32px;
  `,
  medium: css`
    font-size: ${typography.fontSize.base};
    padding: 8px 16px;
    height: 40px;
  `,
  large: css`
    font-size: ${typography.fontSize.lg};
    padding: 12px 20px;
    height: 48px;
  `,
} as const;

export type VariantMap = keyof typeof VariantMap;
export type SizeMap = keyof typeof SizeMap;
