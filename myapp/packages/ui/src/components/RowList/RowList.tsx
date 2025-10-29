import styled from "@emotion/styled";
import { FlexLayout } from "../FlexLayout";
import { Typography } from "../Typography";

export interface RowListProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
  as?: "div" | "li";
}

export const RowList = ({
  left,
  right,
  contents,
  withArrow,
  onClick,
  as = "li",
}: RowListProps) => {
  return (
    <Container as={as} onClick={onClick}>
      <FlexLayout alignItems="center">
        {left && left}
        <FlexLayout style={{ flex: 1, margin: "0 12px" }}>
          {contents}
        </FlexLayout>
        {right && right}
        {withArrow ? <Arrow /> : null}
      </FlexLayout>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 24px;
`;

function RowListText({
  title,
  subTitle,
}: {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}) {
  return (
    <FlexLayout direction="column">
      <Typography typography="bodyL" fontWeight="500">
        {title}
      </Typography>
      <Typography typography="bodyS">{subTitle}</Typography>
    </FlexLayout>
  );
}

function Arrow() {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      width={24}
      height={24}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g id="Icon-Chevron-Left" transform="translate(237.000000, 335.000000)">
          <polyline
            className="st0"
            id="Fill-35"
            points="-210.9,-289 -212.9,-291 -201.1,-302.7 -212.9,-314.4 -210.9,-316.4 -197.1,-302.7      -210.9,-289    "
          />
        </g>
      </g>
    </svg>
  );
}

RowList.Texts = RowListText;
