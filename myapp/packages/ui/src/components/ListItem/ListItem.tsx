import styled from "@emotion/styled";
import { FlexLayout } from "../FlexLayout";
import { Typography } from "../Typography";
import { colors, spacing } from "@repo/tokens";
import { css } from "@emotion/react";

export interface ListItemProps {
  leading?: React.ReactNode;
  contents: React.ReactNode;
  trailing?: React.ReactNode;
  showDivider?: boolean;
  onClick?: () => void;
  as?: "div" | "li";
}

interface ContainerProps {
  showDivider?: boolean;
}
export interface ListContentsPoprs {}

const Container = styled("div", {
  shouldForwardProp: (prop) => prop !== "showDivider",
})<ContainerProps>(
  {
    margin: `0 ${spacing[4]}`,
    padding: `${spacing[2]} 0`,
  },
  ({ showDivider }) =>
    showDivider &&
    css`
      border-bottom: 1px solid ${colors.gray[400]};
    `
);

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const ListItem = ({
  onClick,
  as,
  leading,
  trailing,
  contents,
  showDivider,
}: ListItemProps) => {
  const ContentWithTrailing = (
    <FlexLayout direction="column" gap={12} alignItems="start">
      <ContentsWrap>{contents}</ContentsWrap>
      {trailing && trailing}
    </FlexLayout>
  );

  return (
    <Container as={as} onClick={onClick} showDivider={showDivider}>
      {leading ? (
        <FlexLayout alignItems="center" gap={12}>
          {leading}
          {ContentWithTrailing}
        </FlexLayout>
      ) : (
        ContentWithTrailing
      )}
    </Container>
  );
};

function ContentsText({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <>
      <Typography typography="bodyL">{title}</Typography>
      <Typography typography="bodyS">{subtitle}</Typography>
    </>
  );
}

ListItem.Texts = ContentsText;
