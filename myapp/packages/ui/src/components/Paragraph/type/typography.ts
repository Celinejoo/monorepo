import { css } from "@emotion/react";
import { heading, body } from "@repo/tokens";

export const typographyMap = {
  t1: heading.t1,
  t2: heading.t2,
  t3: heading.t3,
  t4: heading.t4,
  sub1: body.sub1,
  sub2: body.sub2,
  sub3: body.sub3,
  sub4: body.sub4,
} as const;

export const fontWeightMap = {
  light: css`
    font-weight: var(--font-weight-light);
  `,
  regular: css`
    font-weight: var(--font-weight-regular);
  `,
  medium: css`
    font-weight: var(--font-weight-medium);
  `,
  semibold: css`
    font-weight: var(--font-weight-semibold);
  `,
  bold: css`
    font-weight: var(--font-weight-bold);
  `,
};

export type TypographyType = keyof typeof typographyMap;
export type FontWeightType = keyof typeof fontWeightMap;
