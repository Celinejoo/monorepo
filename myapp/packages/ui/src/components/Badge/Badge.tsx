import styled from "@emotion/styled";
import {
  backgroundPresetsMap,
  BackgroundPresetsMap,
} from "../../utils/generateBackground";
import { css } from "@emotion/react";

export interface BadgeProps {
  children: React.ReactNode;
  size?: "small" | "large";
  background?: BackgroundPresetsMap;
}

const Container = styled.div<BadgeProps>(
  {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "16px",
  },
  ({ size = "small" }) =>
    size === "small"
      ? css`
          padding: 2px 8px;
        `
      : css`
          padding: 4px 12px;
        `,
  ({ background = "gray100" }) => backgroundPresetsMap[background],
);

export const Badge = ({ background, children, size }: BadgeProps) => (
  <Container background={background} size={size}>
    {children}
  </Container>
);
