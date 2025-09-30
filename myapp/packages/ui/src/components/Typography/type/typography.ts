import { css } from "@emotion/react";

export const typographyMap = {
  headingXL: css`
    font-size: 32px;
    font-weight: 700;
  `,
  headingL: css`
    font-size: 28px;
    font-weight: 700;
  `,
  headingM: css`
    font-size: 24px;
    font-weight: 500;
  `,
  headingS: css`
    font-size: 20px;
    font-weight: 500;
  `,
  bodyL: css`
    font-size: 18px;
    font-weight: 400;
  `,
  body: css`
    font-size: 16px;
    font-weight: 400;
  `,
  bodyS: css`
    font-size: 14px;
    font-weight: 400;
  `,
  caption: css`
    font-size: 12px;
    font-weight: 400;
  `,
};

export type TypographyType = keyof typeof typographyMap;
