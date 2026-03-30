import { css } from "@emotion/react";

export const buttonSizeMap = {
  small: css`
    font-size: var(--font-size-14);
    padding: 6px;
  `,
  medium: css`
    font-size: var(--font-size-16);
    padding: 8px;
  `,
  large: css`
    font-size: var(--font-size-18);
    padding: 12px;
  `,

  xlarge: css`
    font-size: var(--font-size-20);
    padding: 14px;
  `,
} as const;

export const iconSizeMap = {
  small: css`
    width: 16px;
    height: 16px;
  `,
  medium: css`
    width: 20px;
    height: 20px;
  `,
  large: css`
    width: 24px;
    height: 24px;
  `,
  xlarge: css`
    width: 28px;
    height: 28px;
  `,
} as const;

export const buttonVarientMap = {
  fill: css`
    background: var(--color-gray-300);
    color: var(--color-white-0);
    border-radius: 8px;
  `,
  clear: css`
    background: transparent;
  `,
  border: css`
    border: 1px solid;
    border-radius: 8px;
    border-color: var(--color-gray-300);
  `,
} as const;

export type ButtonSize = keyof typeof buttonSizeMap;
export type ButtonVaiant = keyof typeof buttonVarientMap;
export type IconSize = keyof typeof iconSizeMap;
