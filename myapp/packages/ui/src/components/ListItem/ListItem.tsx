import styled from "@emotion/styled";
import { FlexLayout } from "../FlexLayout";
import { Typography } from "../Typography";
import { colors, spacing } from "@repo/tokens";

type SpacingKey = keyof typeof spacing;

interface ListItemProps {
  leading?: React.ReactNode;
  contents: React.ReactNode;
  trailing?: React.ReactNode;
  showDivider?: boolean;
  onClick?: () => void;
  as?: "div" | "li";
  spacing?: SpacingKey;
}

interface ContainerProps {
  showDivider?: boolean;
  spacing: SpacingKey;
}

interface ContentsTextProps {
  title: string;
  subtitle?: string;
}

const Container = styled("div", {
  shouldForwardProp: (prop) => !["showDivider", "spacing"].includes(prop),
})<ContainerProps>(({ spacing: space, showDivider }) => ({
  margin: `0 ${spacing[space]}`,
  padding: `${spacing[space]} 0`,
  borderBottom: showDivider ? `1px solid ${colors.gray[400]}` : undefined,
}));

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
  spacing = 4,
}: ListItemProps) => {
  const ContentWithTrailing = (
    <FlexLayout direction="column" gap={8} alignItems="start">
      <ContentsWrap>{contents}</ContentsWrap>
      {trailing && trailing}
    </FlexLayout>
  );

  return (
    <Container
      as={as}
      onClick={onClick}
      showDivider={showDivider}
      spacing={spacing}
    >
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

function ContentsText({ title, subtitle }: ContentsTextProps) {
  return (
    <>
      <Typography typography="bodyL" color="text" fontWeight="bold">
        {title}
      </Typography>
      <Typography typography="bodyS">{subtitle}</Typography>
    </>
  );
}

ListItem.Texts = ContentsText;
