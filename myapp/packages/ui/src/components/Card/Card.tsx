import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { borderRadius, colors, spacing } from "@repo/tokens";

export interface CardProps {
  onClick?: () => void;
  children?: React.ReactNode;
  as?: "div" | "li";
  outlined?: boolean;
}

export const Card = ({ onClick, children, as, outlined }: CardProps) => (
  <Container onClick={onClick} as={as} outlined={outlined}>
    {children}
  </Container>
);

const Container = styled.div<CardProps>(
  {
    padding: `${spacing[4]}`,
    borderRadius: `${borderRadius.xl}`,
    transition: "all ease 0.2s",
    "&:active": {
      transform: "scale(0.99)",
    },
  },
  ({ outlined }) =>
    outlined
      ? css`
          border: 1px solid ${colors.gray[400]};
          background: ${colors.gray[100]};
        `
      : css`
          background: ${colors.gray[100]};
        `
);

export default Card;
