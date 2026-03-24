import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  backgroundPresetsMap,
  BackgroundPresetsMap,
} from "../../utils/generateBackground";

export interface CardProps {
  onClick?: () => void;
  as?: "div" | "li";
  outlined?: boolean;
  background?: BackgroundPresetsMap;
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  children?: React.ReactNode;
}

export interface CardContentsProps {
  children?: React.ReactNode;
}

const StyledCard = styled.div<CardProps>(
  {
    padding: "18px 24px",
    borderRadius: "18px",
    transition: "all ease 0.2s",
    "&:active": {
      transform: "scale(0.99)",
    },
  },
  ({ background = "gray100" }) => backgroundPresetsMap[background],
  ({ outlined }) =>
    outlined &&
    css`
      border: 1px solid;
      border-color: var(--color-gray-400);
    `,
);

const CardBase = ({
  onClick,
  as,
  outlined,
  children,
  background,
}: CardProps) => (
  <StyledCard
    onClick={onClick}
    as={as}
    outlined={outlined}
    background={background}
  >
    {children}
  </StyledCard>
);

const StyledCardHeader = styled.div`
  margin-bottom: 8px;
`;

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <StyledCardHeader>
      <div>{children}</div>
    </StyledCardHeader>
  );
};

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
