import { css } from "@emotion/react";
import { borderRadius, colors, typography } from "@repo/tokens";

export const buttonVariantMap = {
  solid: css`
    background-color: ${colors.primary[500]};
    color: ${colors.ui.surface};
    border: none;
    &:hover {
      background-color: ${colors.primary[700]};
    }
    &:active {
      background-color: ${colors.primary[700]};
    }
  `,
  outline: css`
    border: 1px solid ${colors.primary[500]};
    color: ${colors.primary[500]};
    background-color: ${colors.ui.surface};
  `,
  gray: css`
    background-color: ${colors.gray[500]};
    color: ${colors.ui.surface};
    border: none;
  `,
  grayOutline: css`
    background-color: ${colors.ui.surface};
    color: ${colors.gray[500]};
    border: 1px solid ${colors.gray[500]};
  `,

  textButton: css`
    background: none;
    padding: 0;
    color: ${colors.gray[500]};
    &:hover {
      text-decoration: underline;
    }
    &:active {
      text-decoration: underline;
    }
  `,
} as const;

export const buttonSizeMap = {
  small: css`
    font-size: ${typography.fontSize.sm};
    padding: 6px 12px;
    height: 32px;
    border-radius: ${borderRadius.base};
  `,
  medium: css`
    font-size: ${typography.fontSize.base};
    padding: 8px 16px;
    height: 40px;
    border-radius: ${borderRadius.md};
  `,
  large: css`
    font-size: ${typography.fontSize.lg};
    padding: 12px 20px;
    height: 48px;
    border-radius: ${borderRadius.lg};
  `,
} as const;

export type buttonVariantMap = keyof typeof buttonVariantMap;
export type buttonSizeMap = keyof typeof buttonSizeMap;
