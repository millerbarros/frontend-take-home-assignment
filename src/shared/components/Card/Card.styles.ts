import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledCard = styled.section`
  width: 100%;
  padding: ${SPACING.md} ${SPACING.md} calc(${SPACING.lg} + ${toREM('8px')});
  background-color: ${COLOR.neutralWhite};
  box-shadow: 0 ${SPACING.sm} ${SPACING.md} rgba(30, 42, 50, 0.08);
  border-radius: ${SPACING.xs};

  ${breakpointMin.lg`
    padding: ${SPACING.lg} calc(${SPACING.lg} + ${toREM('8px')});
  `}
`;
