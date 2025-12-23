import styled from "@emotion/styled";

import { typographyMap, TypographyType } from "./type/typography";
import { colorPresetsMap } from "./type/color";
import { CSSProperties } from "react";
import { typography } from "@repo/tokens";

export interface TypographyProps {
  typography: TypographyType;
  color?: colorPresetsMap | string;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  bold?: boolean;
}

export const Typography = styled.p<TypographyProps>(
  {
    fontFamily: `${typography.fontFamily.sans}`,
    margin: 0,
  },
  ({ typography }) => typographyMap[typography],
  ({ display, textAlign, fontWeight, bold, color }) => ({
    display,
    textAlign,
    fontWeight: bold ? "bold" : fontWeight,
    color: colorPresetsMap[color as colorPresetsMap],
  })
);
