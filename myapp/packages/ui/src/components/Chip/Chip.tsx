import styled from "@emotion/styled";
import { colors, spacing } from "@repo/tokens";
import { Typography } from "../Typography";

export interface ChipProps {
  label: string;
}

//TO DO :  color 추가하여 뱃지 여러개 만들기
const Container = styled.div`
  display: inline-block;
  border-radius: ${spacing[3]};
  padding: 2px 8px;
  background: ${colors.status.success};
`;

export const Chip = ({ label }: ChipProps) => (
  <Container>
    <Typography typography="bodyS" fontWeight="400" color="white">
      {label}
    </Typography>
  </Container>
);
