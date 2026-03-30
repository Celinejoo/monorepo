import { css } from "@emotion/react";

export const buttonSizeMap = {
  small: css`
    font-size: var(--font-size-14);
    padding: 6px 12px;
    border-radius: 4px;
  `,
  medium: css`
    font-size: var(--font-size-16);
    padding: 8px 16px;
    border-radius: 8px;
  `,
  large: css`
    font-size: var(--font-size-18);
    padding: 12px 20px;
    border-radius: 12px;
  `,

  xlarge: css`
    font-size: var(--font-size-20);
    padding: 12px 20px;
    border-radius: 16px;
  `,
} as const;

export const buttonColorMap = {
  primary: css`
    --button-color: 59, 130, 246;
    --button-bg-weak: 219, 234, 254;
    --button-text-color: 255, 255, 255;
  `,
  danger: css`
    --button-color: 239, 68, 68;
    --button-bg-weak: 254, 226, 226;
    --button-text-color: 255, 255, 255;
  `,
  light: css`
    --button-color: 249, 250, 251;
    --button-bg-weak: 219, 231, 235;
    --button-text-color: 59, 130, 246;
  `,
  dark: css`
    --button-color: 55, 65, 81;
    --button-bg-weak: 229, 231, 235;
    --button-text-color: 255, 255, 255;
  `,
  text: css`
    padding: 0 !important;
    background: none;
    --button-text-color: 107, 114, 128;
    &: hover {
      text-decoration: underline;
    }
  `,
};

export const buttonVariantMap = {
  fill: css`
    background-color: rgb(var(--button-color));
    color: rgb(var(--button-text-color));
  `,
  weak: css`
    background-color: rgb(var(--button-bg-weak));
    color: rgb(var(--button-text-weak, var(--button-color)));
  `,
};

export type ButtonSize = keyof typeof buttonSizeMap;
export type ButtonVariant = keyof typeof buttonVariantMap;
export type ButtonColor = keyof typeof buttonColorMap;
