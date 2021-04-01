import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledPageTitle = styled.h1`
  width: 100%;
  color: ${COLOR.brandPrimaryColor};
  margin: 0;
  padding: ${SPACING.lg} ${SPACING.md} ${SPACING.md};
  font-size: ${toREM('20px')};
  font-weight: normal;
  text-align: center;

  ${breakpointMin.lg`
    font-size: ${toREM('18px')};
    padding: ${SPACING.xl} ${SPACING.md} ${SPACING.md};
  `}
`;
