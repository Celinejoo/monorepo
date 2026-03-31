import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  backgroundPresetsMap,
  BackgroundPresetsMap,
} from "../../utils/generateBackground";

const progressExpand = keyframes`
   from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `;

export interface ScrollAnimationProps {
  background?: BackgroundPresetsMap;
}

export const ScrollAnimation = styled.div<ScrollAnimationProps>`
  &::after {
    content: "";
    height: 3px;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;

    animation-name: ${progressExpand};
    animation-timeline: scroll();

    ${({ background = "gray900" }) => backgroundPresetsMap[background]};
  }
`;
