import styled from "@emotion/styled";

import {
  fontWeightMap,
  FontWeightType,
  typographyMap,
  TypographyType,
} from "./type/typography";

import { CSSProperties } from "react";

import { ColorPresetsMap, colorPresetsMap } from "./type/color";

export interface ParagraphProps {
  typography: TypographyType;
  color?: ColorPresetsMap;
  fontWeight?: FontWeightType;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
}

export const Paragraph = styled.p<ParagraphProps>(
  {
    margin: 0,
    whiteSpace: "pre-line",
  },
  ({ typography }) => typographyMap[typography],
  ({ fontWeight = "regular" }) => fontWeightMap[fontWeight],
  ({ color = "gray700" }) => colorPresetsMap[color],
  ({ display, textAlign }) => ({
    display,
    textAlign,
  }),
);
