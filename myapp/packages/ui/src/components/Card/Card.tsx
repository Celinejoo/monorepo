import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { borderRadius, colors, spacing } from "@repo/tokens";
import { Typography } from "../Typography";

export interface CardProps {
  onClick?: () => void;
  as?: "div" | "li";
  outlined?: boolean;
  children?: React.ReactNode;
}

interface CardHeaderProps {
  title?: string;
}

interface CardContentsProps {
  children?: React.ReactNode;
}

export const CardBase = ({ onClick, as, outlined, children }: CardProps) => (
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

const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <StyledCardHeader>
      <Typography typography="bodyL">{title}</Typography>
    </StyledCardHeader>
  );
};

const StyledCardHeader = styled.div`
  margin-bottom: 8px;
`;

interface CardContentsProps {
  children?: React.ReactNode;
}

const CardContents = ({ children }: CardContentsProps) => {
  return <div>{children}</div>;
};

interface CardCompoundComponent extends React.FC<CardProps> {
  Header: React.FC<CardHeaderProps>;
  Contents: React.FC<CardContentsProps>;
}

export const Card: CardCompoundComponent = Object.assign(CardBase, {
  Header: CardHeader,
  Contents: CardContents,
});

export default Card;
